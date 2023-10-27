it('titles are correct', () => {
  const page = cy.visit('/')

  page.get('h1').should('have.text', 'Hi! I’m Dolf Barr ')
})
