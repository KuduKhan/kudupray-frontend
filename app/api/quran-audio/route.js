const AUDIO_ROOT = 'https://cdn.islamic.network/quran/audio';
const ALLOWED_BITRATES = new Set(['128', '192']);
const RECITER_ID = /^ar\.[a-z0-9-]+$/;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const bitrate = searchParams.get('bitrate') || '';
  const reciter = searchParams.get('reciter') || '';
  const ayah = Number(searchParams.get('ayah'));

  if (!ALLOWED_BITRATES.has(bitrate) || !RECITER_ID.test(reciter) || !Number.isInteger(ayah) || ayah < 1 || ayah > 6236) {
    return Response.json({ error: 'Invalid Qur’an audio request.' }, { status: 400 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 45_000);
  try {
    const upstream = await fetch(`${AUDIO_ROOT}/${bitrate}/${reciter}/${ayah}.mp3`, {
      signal: controller.signal,
      headers: { 'User-Agent': 'KuduPray audio downloader' },
      next: { revalidate: 60 * 60 * 24 * 30 },
    });
    if (!upstream.ok) {
      return Response.json({ error: 'Qur’an audio is unavailable right now.' }, { status: upstream.status });
    }

    return new Response(await upstream.arrayBuffer(), {
      headers: {
        'Content-Type': upstream.headers.get('content-type') || 'audio/mpeg',
        'Content-Length': upstream.headers.get('content-length') || '',
        'Cache-Control': 'public, max-age=604800, s-maxage=2592000',
      },
    });
  } catch {
    return Response.json({ error: 'Qur’an audio could not be retrieved.' }, { status: 502 });
  } finally {
    clearTimeout(timeout);
  }
}