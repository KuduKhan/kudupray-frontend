export default function manifest() {
  return {
    name: "KuduPray | Premium Islamic Companion",
    short_name: "KuduPray",
    description:
      "Prayer times, Qibla, Qur'an reading, Adhan audio, duas, Ruqyah, and practical Muslim guidance.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f3faf7",
    theme_color: "#047857",
    lang: "en",
    icons: [
      {
        src: "/brand/kudupray-emblem.png",
        sizes: "760x675",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
