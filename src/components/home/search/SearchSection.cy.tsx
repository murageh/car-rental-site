import React from 'react'
import SearchSection from './SearchSection'

describe('<SearchSection />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<SearchSection/>)
    })

    // check the title
    it('renders with title', () => {
        cy.mount(<SearchSection/>)
        cy.get(':contains("Explore our top deals from Top Rated Dealers")').should('exist')
    })

    // verify .make-filter exists
    it('renders with make filter', () => {
        cy.mount(<SearchSection/>)
        cy.get('.make-filter').should('exist')
    })

    // verify .car-tile-list exists
    it('renders with car tiles', () => {
        cy.mount(<SearchSection/>)
        cy.get('.car-tile-list').should('exist')
    })
})