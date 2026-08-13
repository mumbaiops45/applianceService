/** @type {import('next').NextConfig} */
const nextConfig = {
  // output:"export",
  /* config options here */
  reactCompiler: true,
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "logo.clearbit.com" },
      { protocol: "https", hostname: "www.google.com" },
    ],
  },
};

export default nextConfig;