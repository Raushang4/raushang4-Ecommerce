/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*\\.html',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
