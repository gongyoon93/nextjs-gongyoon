/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const LANGUAGE = "ko-KR";

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}`,
      },
      {
        source: "/api/movies/:id",
        destination: `${BASE_URL}/movie/:id?api_key=${API_KEY}&language=${LANGUAGE}`,
      },
    ];
  },
};

module.exports = nextConfig;
