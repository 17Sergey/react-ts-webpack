module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
  },
  devtool: "cheap-module-source-map", // optimal size and speed. Source map helps us to debug with comparing lines and expressions of compiled code and source
};
