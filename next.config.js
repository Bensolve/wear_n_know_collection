/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // Your environment variables here
        MONGODB_URI: process.env.MONGODB_URI,
      },
    images: {
        
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            pathname: '**',
          },
          {
            protocol: "https",
            hostname: "*",
          },
        ]
      },
}

module.exports = nextConfig
