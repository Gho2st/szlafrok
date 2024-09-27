/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["szlafroki.s3.eu-central-1.amazonaws.com"],
      unoptimized: true,
    },
    reactStrictMode: false,
  };
  
  export default nextConfig;