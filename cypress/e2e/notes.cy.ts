describe('Notes Section', () => {
  it('displays notes listing and navigates to single note', () => {
    cy.visit('/notes/')
    cy.get('h1').should('contain.text', 'Notes')

    cy.get('a').contains('Initial note').click()
    cy.url().should('include', '/notes/initial-note')

    cy.get('article h1').should('contain.text', 'Initial note')
    cy.get('article').should('contain.text', 'frontend development')
    cy.get('article footer').should('contain.text', 'Discuss on Twitter')
    cy.get('article footer').should('contain.text', 'Edit on GitHub')
  })
})
