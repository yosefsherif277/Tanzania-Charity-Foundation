/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // هذا السحر!
  trailingSlash: true,
  images: {
    unoptimized: true  // مهم للصور
  }
}

module.exports = nextConfig