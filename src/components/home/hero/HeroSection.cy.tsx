import React from 'react'
import HeroSection from './HeroSection'

describe('<HeroSection />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<HeroSection/>)
    })

    // check if header exists
    it('renders with header', () => {
        cy.mount(<HeroSection/>)
        cy.get('header').should('exist')
    })

    // check if heroimg div exists with a background image
    it('renders with heroimg div', () => {
        cy.mount(<HeroSection/>)
        cy.get('.heroimg').should('exist')
        cy.get('.heroimg').should('have.css', 'background-image')
    })

    // look for the h1 tag with the text
    it('renders with h1 tag', () => {
        cy.mount(<HeroSection/>)
        cy.get('h1').should('exist')
        cy.get(':contains("Fast and easy way to rent")').should('exist')
    })

    // look for play store and app store buttons
    // look for two anchor tags with images with the alt text "app store" and "play store"
    it('renders with app store and play store buttons', () => {
        cy.mount(<HeroSection/>)
        cy.get('img[alt="app store"]').should('exist')
        cy.get('img[alt="google play"]').should('exist')
    })
})