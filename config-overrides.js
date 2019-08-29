const { override, fixBabelImports, addLessLoader,addDecoratorsLegacy,addWebpackAlias } = require('customize-cra');
const path = require("path")
const theme = require('./theme.js')

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme,
  }),
  addDecoratorsLegacy(),
  addWebpackAlias({
    '@': path.join(__dirname, "src")
  })
);