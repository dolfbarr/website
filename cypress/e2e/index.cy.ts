describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders greeting title correctly', () => {
    cy.get('h1').should('contain.text', 'Dolf Barr')
  })

  it('handles skip-to-content anchor navigation', () => {
    cy.get('a[title="Skip to content"]')
      .focus()
      .should('be.visible')
      .click()
    cy.url().should('include', '#start-of-content')
  })

  it('toggles theme between light and dark modes and persists on reload', () => {
    cy.get('[data-theme-button]').click()
    cy.get('html').should('have.class', 'dark')

    cy.reload()
    cy.get('html').should('have.class', 'dark')

    cy.get('[data-theme-button]').click()
    cy.get('html').should('not.have.class', 'dark')
  })

  it('toggles location map iframe with accessible attributes and sandboxing', () => {
    cy.get('[data-map-button]').should('have.attr', 'aria-expanded', 'false')
    cy.get('[data-map-container]').should('have.class', 'h-0')

    cy.get('[data-map-button]').click()
    cy.get('[data-map-button]').should('have.attr', 'aria-expanded', 'true')
    cy.get('[data-map-container]')
      .should('have.class', 'h-96')
      .find('iframe')
      .should('exist')
      .and('have.attr', 'sandbox', 'allow-scripts allow-same-origin allow-popups')

    cy.get('[data-map-button]').click()
    cy.get('[data-map-button]').should('have.attr', 'aria-expanded', 'false')
    cy.get('[data-map-container]').should('have.class', 'h-0')
  })

  it('ensures external links have target="_blank" and rel="noreferrer noopener"', () => {
    cy.get('a[target="_blank"]').each(($el) => {
      cy.wrap($el).should('have.attr', 'rel', 'noreferrer noopener')
    })
  })

  it('renders projects, work experience, and skills sections', () => {
    cy.get('[data-testid="projects"]').should('be.visible')
    cy.get('[data-testid="experience"]').should('be.visible')
    cy.get('[data-testid="skills-section"]').should('be.visible')
  })

  it('includes RSS, sitemap, and structured data in head', () => {
    cy.get('link[type="application/rss+xml"]')
      .should('have.attr', 'href')
      .and('include', '/rss.xml')
    cy.get('link[rel="sitemap"]')
      .should('have.attr', 'href')
      .and('include', '/sitemap-index.xml')
    cy.get('script[type="application/ld+json"]').should('exist')
  })

  it('serves valid robots.txt and rss.xml endpoints', () => {
    cy.request('/robots.txt').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.include('User-agent: *')
      expect(response.body).to.include('sitemap-index.xml')
    })

    cy.request('/rss.xml').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.include('<rss version="2.0">')
      expect(response.body).to.include('Dolf Barr')
    })
  })

  it('navigates to Notes page', () => {
    cy.get('nav').contains('Notes').click()
    cy.url().should('include', '/notes')
  })
})
