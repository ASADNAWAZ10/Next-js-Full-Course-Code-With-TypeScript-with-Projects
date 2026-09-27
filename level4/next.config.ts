import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        hostname:"1h3.googleusercontent.com"

      },
      {
        hostname: "res.cloudinary.com"
      }
    ]
  }
};

export default nextConfig;
