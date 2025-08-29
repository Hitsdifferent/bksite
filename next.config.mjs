import path from 'path';

// Verkrijg het pad naar de huidige map (gelijk aan __dirname in CommonJS)
const __dirname = path.dirname(new URL(import.meta.url).pathname);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Voeg hier het domein van Sanity toe
  },
  webpack(config) {
    // Voeg de SVG-loader toe voor .svg-bestanden
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Voeg de alias voor de src/ map toe
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"), // Stel de alias in voor de src map
    };

    return config;
  },
};

export default nextConfig;
