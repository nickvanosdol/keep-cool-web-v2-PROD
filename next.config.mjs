/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BEEHIIV_API_TOKEN: process.env.BEEHIIV_API_TOKEN,
    BEEHIIV_PUB_ID: process.env.BEEHIIV_PUB_ID,
  },
}

export default nextConfig
