const { DefinePlugin } = require("webpack");

// TODO: find another solution with dotenv package

module.exports = {
  mode: "production", // enable webpack optimizations
  devtool: "source-map", // more accurate, but slower and bigger files
  plugins: [
    new DefinePlugin({
      "process.env.custom": JSON.stringify("PROD: Custom env variable"),
    }),
  ],
};
