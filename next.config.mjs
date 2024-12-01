/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.i-o-tech.net",
      },
    ],
  },
};

export default nextConfig;
