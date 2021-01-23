const path = require("path");
//* Use To Dynamically Create html file and add files
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Entry point in order to start Webpack
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // Default true | Set To Remove Content Hash System internally wont change at exery small change
  optimization: {
    realContentHash: true,
  },

  plugins: [
    //* Automatically Generate New Html file and link all the Files with it.
    new HtmlWebpackPlugin({
      filename:  "index.html",
      template: "./index.html",
    }),
  ],

  module: {
    rules: [
      {
        //* Chk for scss And then do [ conver to css , transfer to webpack , inject in html file] get into bundle
        test: /.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
     
      // {
      //* Chk for css And then do [transfer to webpack , inject in html file] get into bundle
      //   test: /.css$/,
      //   use: ["style-loader", "css-loader"],
      // },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "img",
          },
        },
      },
    ],
  },
  // Make debugging easy by opening fields of source code in dev Tools
  devtool: "eval-source-map",
};
