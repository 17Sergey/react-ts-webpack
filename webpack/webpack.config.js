const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const envConfig = require(`./webpack.${process.env.NODE_ENV}.js`);

const config = merge(commonConfig, envConfig);
module.exports = config;

// When it's a function, we get access to the env variables of the package.json file
// (But for this you need to specify --env VAR_NAME = ... in webpack command in package.json)

// module.exports = (envVars) => {
//   const { NODE_ENV } = envVars;
//   const envConfig = require(`./webpack.${NODE_ENV}.js`);
//   const config = merge(commonConfig, envConfig);

//   return config;
// };
