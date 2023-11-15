import React from 'react'
import MainHeader from './MainHeader'

describe('<MainHeader />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<MainHeader/>)
    })

    // check text logo
    it('renders with text logo', () => {
        cy.mount(<MainHeader/>)
        cy.get('.logo').should('have.text', 'Autochek')
    })

    // verify mobile menu is hidden on desktop
    it('renders with hidden mobile menu', () => {
        cy.mount(<MainHeader/>)
        cy.viewport('macbook-15')
        cy.get('.mobile-menu').should('not.be.visible')
    })

    // verify mobile menu is visible on mobile
    it('renders with visible mobile menu', () => {
        cy.mount(<MainHeader/>)
        cy.viewport('iphone-x')
        cy.get('.mobile-menu').should('be.visible')
    })

    // click on mobile menu
    it('mobile menu', () => {
        cy.mount(<MainHeader/>)
        cy.viewport('iphone-x')

        // open menu
        cy.get('#menu-toggle').click()
        cy.wait(1000) // wait for animation to complete
        cy.get('#modalContainer').should('be.visible')

        // close menu
        cy.get('#menuClose').click()
        cy.wait(1000)
    })
})