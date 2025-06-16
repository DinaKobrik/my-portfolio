/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Указываем, что используем src/app
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
