const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'h1ueyo', 
  e2e: {
   baseUrl:'http://demo-store.seleniumacademy.com/'
  },
});
