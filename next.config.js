/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  responseLimit: '8mb',
  api: {
    bodyParser: {
        sizeLimit: '8mb' // Set desired value here
    }
}
}

module.exports = nextConfig
