module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {}]
  ],
  env: {
    test: {
      presets: [
          ["env", { "targets": { "node": "current" } }]
      ]
    }
  }
};
