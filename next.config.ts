import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },

  async redirects() {
    return [
      {
        source: "/sluzby/upravy-a-sprava-webu",
        destination: "/sluzby/sprava-a-servis",
        permanent: true,
      },
      {
        source: "/sluzby/tvorba-webovych-aplikaci",
        destination: "/sluzby/webove-aplikace",
        permanent: true,
      },
      {
        source: "/sluzby/redesign-webovych-stranek",
        destination: "/sluzby/redesign-webu",
        permanent: true,
      },
      {
        source: "/sluzby/kodovani-html-sablon",
        destination: "/sluzby/doplnkove-sluzby",
        permanent: true,
      },
      {
        source: "/sluzby/wordpress",
        destination: "/sluzby/tvorba-webu",
        permanent: true,
      },
      {
        source: "/cenik",
        destination: "/sluzby",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
