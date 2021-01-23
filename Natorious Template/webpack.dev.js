const path = require("path");

// Use To Dynamically Create html file and add files
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  // Set To easy reading of webpack code and better debugging
  mode: "development",

  // Entry point in order to start Webpack
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [],

  module: {
    rules: [],
  },
  
  // Make debugging easy by opening fields of source code in dev Tools
  devtool: "inline-source-map",
  // Other Options Basis on dev quality
  // devtool: "[eval | eval-source-map | inline-source-map]",

  // Open Development Server || Browser By its own
  // devServer: {
  //   open: true
  // }
});
