// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

it('shows clock', function () {
  cy.visit('index.html')
  cy.wait(5000)
  cy.get('#clock').should('be.visible')
})
