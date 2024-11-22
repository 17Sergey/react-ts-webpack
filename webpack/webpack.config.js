const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

// When it's a function, we get access to the env variables of the package.json file
module.exports = (envVars) => {
  const { NODE_ENV } = envVars;
  const envConfig = require(`./webpack.${NODE_ENV}.js`);
  const config = merge(commonConfig, envConfig);

  return config;
};
