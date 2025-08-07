import type { NextConfig } from "next";

// Türkçe açıklama: Next.js yapılandırma dosyası
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/fullstackkurs',
  assetPrefix: '/fullstackkurs/',
};

// Hem CommonJS hem de ES module export kullanmaya gerek yok.
// Next.js genellikle module.exports ile çalışır.
module.exports = nextConfig;
