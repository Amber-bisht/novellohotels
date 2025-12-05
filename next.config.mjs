/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['res.cloudinary.com', 'novellohotels.com'], // Allowed image domains
    },
  };
  
  export default nextConfig;
  