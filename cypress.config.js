const { defineConfig } = require("cypress");

module.exports = defineConfig({ 
  e2e: {
   baseUrl:'http://demo-store.seleniumacademy.com/'
  },
});
