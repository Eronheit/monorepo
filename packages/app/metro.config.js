/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');
const getWorkspaces = require('get-yarn-workspaces');
const workspaces = getWorkspaces(__dirname);

module.exports = {
  projectRoot: path.resolve(__dirname, '../../'),
  watchFolders: [path.resolve(__dirname, '../../node_modules'), ...workspaces],

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
