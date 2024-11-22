const { DefinePlugin } = require("webpack");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map", // optimal size and speed. Source map helps us to debug with comparing lines and expressions of compiled code and source
  plugins: [
    new DefinePlugin({
      "process.env.custom": JSON.stringify("DEV: Custom env variable"),
    }),
  ],
};
