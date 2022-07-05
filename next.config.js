/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  responseLimit: "8mb",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_NEXTAPI_URL}/:path*`,
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
