const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://letcode.in",
    watchForFileChanges: false, // Disable auto-run on file changes

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
  viewportWidth: 1250,
  viewportHeight: 720,
  reporter: 'mochawesome', // Use Mochawesome as the reporter
  reporterOptions: {
    reportDir: 'cypress/reports', // Directory to save reports
    overwrite: false,
    html: false,
    json: true,
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
