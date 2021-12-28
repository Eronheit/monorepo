/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  // Allows us to access other directories in the monorepo
  experimental: {
    externalDir: true
  },
  webpack: (config, options) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]

    if (options.isServer) {
      config.externals = ['react', 'react-native-web', ...config.externals];
    }
    config.resolve.alias['react'] = path.resolve(__dirname, '../../', 'node_modules', 'react');
    config.resolve.alias['react-native-web'] = path.resolve(__dirname, '../../', 'node_modules', 'react-native-web');

    return config;
  }
};
