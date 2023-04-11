const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {},
    baseUrl: 'http://www.vr.com.br/'
  },
  component: {
    // setupNodeEvents(on, config) {},
    supportFile: 'cypress/support/component.ts',
    specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}'
  }
});
