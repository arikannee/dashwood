/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: "/:path*", // Match all routes
          has: [
            {
              type: "protocol",
              value: "http", // Detect HTTP
            },
          ],
          destination: "https://dashwood.online/:path*", // Redirect to HTTPS
          permanent: true, // Set 301 permanent redirect
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  