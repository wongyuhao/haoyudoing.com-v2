/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.graphassets.com', 'haoyudoing-cv.s3.amazonaws.com', 'haoyudoing-cv.s3.us-west-2.amazonaws.com', 'media.graphcms.com']
  },
  async redirects() {
    return [
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/haoyudoing/',
        permanent: true,
      },
      {
        source: '/haocao',
        destination: 'https://open.spotify.com/playlist/4dpEKRN6zyyJxi925mWoRB?si=9054fa58272841d6',
        permanent: true,
      },
      {
        source: '/tapia',
        destination: '/',
        permanent: true,
      },
      {
        source: '/resume',
        destination: 'https://media.graphassets.com/VqGs071IQJugX9MO8n0T',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
