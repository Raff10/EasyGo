const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/', //for UI
    "URL": "https://gorest.co.in/public/v2/users/", //for API
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/features/**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
        },
  },
});
