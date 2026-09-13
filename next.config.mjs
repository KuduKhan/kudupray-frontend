/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR ?? '.next',
  outputFileTracingRoot: import.meta.dirname,
  turbopack: { root: import.meta.dirname },
};
export default nextConfig;
