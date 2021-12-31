const path = require("path");

const extraNodeModules = {
  modules: path.resolve(path.join(__dirname, "../SharedComponent")),
};

const watchFolders = [path.resolve(path.join(__dirname, "../SharedComponent"))];

const nodeModulesPaths = [path.resolve(path.join(__dirname, "./node_modules"))];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules,
    nodeModulesPaths,
  },
  watchFolders,
};
