import React from 'react'
import Testimonials from './Testimonials'

describe('<Testimonials />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<Testimonials/>)
    })

    // check the title
    it('renders with title', () => {
        cy.mount(<Testimonials/>)
        cy.get(':contains("Our clients reviews and testimonials")').should('exist')
    })

    // check the review
    it('renders with review', () => {
        cy.mount(<Testimonials/>)
        cy.get('.review').should('exist')
    })

    // verify the stars
    it('renders with stars', () => {
        cy.mount(<Testimonials/>)
        cy.get('.stars').should('exist')
        cy.get('.star').should('have.length', 5)
    })
})