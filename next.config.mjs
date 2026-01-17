/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'novellohotels.com' },
      { protocol: 'https', hostname: 'i.pinimg.com' },
    ],
  },
};

export default nextConfig;
