module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        logLebel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
