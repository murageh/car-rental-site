import React from 'react'
import CallToActionSection from './CallToActionSection'

describe('<CallToActionSection />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<CallToActionSection/>)
    })

    it('renders with children', () => {
        cy.mount(<CallToActionSection/>)
        cy.get('.bg-white').should('exist')
        cy.get('.text-white').should('exist')
        cy.get(':contains("Download the free RentalX app")').should('exist')
        cy.get(':contains("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")').should('exist')

        // play store and app store links
        // search for two links with href= '#'
        cy.get('a[href="#"]').should('have.length', 2)
    })
})