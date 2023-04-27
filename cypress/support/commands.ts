/// <reference types="cypress" />

export {};

// Namespace declaration to expand chainable commands in Typescript
declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      login(): Chainable<Subject>
    }
  }
}

Cypress.Commands.add('login', () => {
  // Implement common command to login here
  cy.visit('localhost:3000/login')
})
