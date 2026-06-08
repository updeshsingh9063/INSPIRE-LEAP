import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/placements/:path+',
        destination: '/placements',
        permanent: true,
      },
      {
        source: '/internships/:path+',
        destination: '/internships',
        permanent: true,
      },
      {
        source: '/courses/:path+',
        destination: '/courses',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
