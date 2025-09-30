const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/pages/main.jsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // Rule for CSS Modules (*.module.css)
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      // Rule for global CSS files (*.css)
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ["style-loader", "css-loader"], // No 'modules: true' here
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/templates/index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public", to: "." }],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },
  // Add this to resolve extensions automatically
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
