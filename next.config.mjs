/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',            // or 'http' if your images are served via HTTP
        hostname: 'sin1.contabostorage.com',
        port: '',                     // leave empty if not needed
        pathname: '/**',              // allows all paths under this domain
      },
    ],
  },
};

export default nextConfig;
