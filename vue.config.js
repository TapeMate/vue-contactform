// module.exports = {
//   devServer: {
//     proxy: {
//       "^/api": {
//         target: "http://localhost:5050",
//         changeOrigin: true,
//         logLebel: "debug",
//         pathRewrite: { "^/api": "/" },
//       },
//     },
//   },
// };

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
