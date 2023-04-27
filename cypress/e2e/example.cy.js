
describe('My First Test', () => {
  it('Load Home Page', () => {
    cy.visit('/')
    cy.contains('Home')
  })
  it('Load About Page', () => {
    cy.visit('/about')
    cy.contains('About')
  })
})