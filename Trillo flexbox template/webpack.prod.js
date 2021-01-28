const path = require("path");

// Use To Dynamically Create html file and add files
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  // Set To easy reading of webpack code and better debugging
  mode: "production",

  // Entry point in order to start Webpack
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [],

  module: {
    rules: [
      {
        //TODO  Need To Be resolved not Working Properly 
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  // Make debugging easy by opening fields of source code in dev Tools
  devtool: "eval-source-map",
});
