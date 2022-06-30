/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  responseLimit: "8mb",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://192.168.30.126:3000/:path*",
      },
    ];
  },
  api: {
    bodyParser: {
      sizeLimit: "8mb", // Set desired value here
    },
  },
};

module.exports = nextConfig;
