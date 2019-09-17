module.exports = {
  presets: ["@vue/app"],
  plugins: [ //iview按需加载配置
    ["import", {
      "libraryName": "iview",
      "libraryDirectory": "src/components"
    }]
  ]
};
