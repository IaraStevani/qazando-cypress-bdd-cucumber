const {defineConfig} = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const {createEsbuildPlugin} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  projectId: '15qp1h',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts:true,
      reportTitle: 'Bootcamp QAzando - Cypress BDD Cucumber',
      reportPageTitle: 'Bootcamp QAzando - Cypress BDD Cucumber',
    },
    baseUrl:'http://automationpratice.com.br',
    specPattern: "**/*.feature",    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});