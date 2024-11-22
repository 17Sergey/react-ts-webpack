const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

// TODO: what if code out of the module.exports?

// When it's a function, we get access to the env variables of the package.json file
module.exports = (envVars) => {
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);

  return config;
};
