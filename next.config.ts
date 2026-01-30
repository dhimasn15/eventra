// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  reactCompiler: false,  
  
  compiler: {
    styledJsx: false, 
  }, 
  experimental: {
    forceSwcTransforms: true,
  }
};

export default nextConfig;