describe('404 Not Found Page', () => {
  it('displays 404 troubleshooting guide and email action', () => {
    cy.visit('/non-existent-page', { failOnStatusCode: false })

    cy.get('h1').should('contain.text', 'Oops!')
    cy.get('h2').should('contain.text', 'Troubleshooting')
    cy.get('ul').should('contain.text', 'Dobule check the URL spelling')
    cy.get('a[href^="mailto:"]').should('exist')
  })

  it('redirects safely back to the home page', () => {
    cy.visit('/non-existent-page', { failOnStatusCode: false })

    cy.get('a').contains('home').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
    cy.get('h1').should('contain.text', 'Dolf Barr')
  })
})
