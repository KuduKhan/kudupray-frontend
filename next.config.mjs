/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR ?? '.next',
  outputFileTracingRoot: import.meta.dirname,
  turbopack: { root: import.meta.dirname },
  // Keep the local preview usable from both localhost and 127.0.0.1.
  // This only affects the development server.
  allowedDevOrigins: ['127.0.0.1'],
};
export default nextConfig;
