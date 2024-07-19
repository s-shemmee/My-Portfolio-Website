import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import TerserPlugin from 'terser-webpack-plugin';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, { isServer }) {
    // Handle SVG files using SVGR
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });

    // Optimizations for client-side bundles
    if (!isServer) {
      // Minify JavaScript
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            ecma: '2021', // Use the latest ECMAScript features
            compress: {
              drop_console: true, // Remove console.* statements in production
            },
          },
        })
      );

      // Optional: Analyze bundle sizes
      if (process.env.ANALYZE) {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
          })
        );
      }
    }

    return config;
  },
};

export default nextConfig;
