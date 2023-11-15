import React from 'react'
import WhyChooseUs from './WhyChooseUs'

describe('<WhyChooseUs />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<WhyChooseUs/>)
    })

    // check the title
    it('renders with title', () => {
        cy.mount(<WhyChooseUs/>)
        cy.get(':contains("We offer best experience with out rentals")').should('exist')
    })

    // verify image with alt text 'why choose us' exists
    it('renders with image', () => {
        cy.mount(<WhyChooseUs/>)
        cy.get('img[alt="why choose us"]').should('exist')
    })

    // verify 4 .advantage divs
    it('renders with 4 advantages', () => {
        cy.mount(<WhyChooseUs/>)
        cy.get('.advantage').should('have.length', 4)
    })
})