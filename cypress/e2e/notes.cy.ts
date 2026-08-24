describe('Notes Section', () => {
  it('displays notes listing with active nav state and time elements', () => {
    cy.visit('/notes/')
    cy.get('h1').should('contain.text', 'Notes')
    cy.get('nav [aria-current="page"]').should('contain.text', 'Notes')

    cy.get('time').should('exist').and('have.attr', 'dateTime')
  })

  it('navigates to single note and verifies content, tags, and footer links', () => {
    cy.visit('/notes/')
    cy.get('a').contains('Initial note').click()
    cy.url().should('include', '/notes/initial-note')

    // Note header & article
    cy.get('article h1').should('contain.text', 'Initial note')
    cy.get('article header time').should('exist')
    cy.get('article header').should('contain.text', 'min read')
    cy.get('article header').should('contain.text', '#')

    // Note body & code blocks
    cy.get('article').should('contain.text', 'frontend development')

    // Footer actions
    cy.get('article footer a')
      .contains('Discuss on Twitter')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'rel', 'noreferrer noopener')

    cy.get('article footer a')
      .contains('Edit on GitHub')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href')
      .and('include', 'github.com')
  })
})
