describe('404 Not Found Page', () => {
  it('displays 404 troubleshooting guide and redirect link', () => {
    cy.visit('/non-existent-page', { failOnStatusCode: false })

    cy.get('h1').should('contain.text', 'Oops!')
    cy.get('h2').should('contain.text', 'Troubleshooting')
    cy.get('ul').should('contain.text', 'Email me')

    cy.get('a').contains('home').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
})
