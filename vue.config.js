const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        "/api": {
          target: "http://106.55.177.91:5556",
          changeOrigin: true,
          pathRewrite: { "^/api": "" },
        },
      },
    },
  },
});
