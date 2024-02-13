/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    experimental: {
        taint: true,
    },
}

module.exports = nextConfig
