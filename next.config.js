/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // Your environment variables here
        MONGODB_URI: process.env.MONGODB_URI,
      },
}

module.exports = nextConfig
