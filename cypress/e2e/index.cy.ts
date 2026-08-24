describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders greeting title correctly', () => {
    cy.get('h1').should('contain.text', 'Dolf Barr')
  })

  it('toggles theme between light and dark modes', () => {
    cy.get('[data-theme-button]').click()
    cy.get('html').should('have.class', 'dark')

    cy.get('[data-theme-button]').click()
    cy.get('html').should('not.have.class', 'dark')
  })

  it('toggles location map iframe on button click', () => {
    cy.get('[data-map-container]').should('have.class', 'h-0')
    cy.get('[data-map-button]').click()

    cy.get('[data-map-container]')
      .should('have.class', 'h-96')
      .find('iframe')
      .should('exist')

    cy.get('[data-map-button]').click()
    cy.get('[data-map-container]').should('have.class', 'h-0')
  })

  it('renders projects and work experience sections', () => {
    cy.get('[data-testid="projects"]').should('be.visible')
    cy.get('[data-testid="experience"]').should('be.visible')
    cy.get('[data-testid="skills-section"]').should('be.visible')
  })

  it('includes RSS, sitemap, and structured data meta tags in head', () => {
    cy.get('link[type="application/rss+xml"]')
      .should('have.attr', 'href')
      .and('include', '/rss.xml')
    cy.get('link[rel="sitemap"]')
      .should('have.attr', 'href')
      .and('include', '/sitemap-index.xml')
    cy.get('script[type="application/ld+json"]').should('exist')
  })

  it('navigates to Notes page', () => {
    cy.get('nav').contains('Notes').click()
    cy.url().should('include', '/notes')
  })
})
