const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

const DEVELOPMENT = "development";
const PRODUCTION = "production";

const mode = process.env.NODE_ENV || DEVELOPMENT;

const config = {
  context: path.resolve(__dirname, "."),

  entry: {
    main: ["core-js", `./src/index.tsx`],
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },

  devtool: "source-map",

  devServer: {
    contentBase: path.resolve("./dist"),
    hot: true,
    historyApiFallback: true,
  },

  resolve: {
    modules: [
      path.resolve(__dirname, "./src"),
      path.resolve(__dirname, "./node_modules"),
    ],
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      react: require.resolve("react"),
    },
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "./tsconfig.json"),
      }),
    ],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: path.resolve("src"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|gif|gif|ico|txt|svg|woff|ttf)$/,
        use: { loader: "file-loader" },
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    new webpack.SourceMapDevToolPlugin({}),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      minify:
        mode === PRODUCTION
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};

module.exports = config;
