import React from 'react'
import BlogSection from './BlogSection'

describe('<BlogSection />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<BlogSection/>)
    })

    // check the title
    it('renders with title', () => {
        cy.mount(<BlogSection/>)
        cy.get(':contains("Read our stories")').should('exist')
    })

    // check the blog tiles
    it('renders with blog tiles', () => {
        cy.mount(<BlogSection/>)
        cy.get('.blog-tile').should('have.length', 6)
    })
})