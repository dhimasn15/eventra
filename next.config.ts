import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  reactCompiler: false,  
  
  compiler: {
    styledJsx: false, 
  }
};

export default nextConfig;