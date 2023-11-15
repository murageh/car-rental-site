import React from 'react'
import {RedButton} from './Inputs'

describe('<RedButton />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<RedButton>Click Me!</RedButton>)
    })

    // applies text
    it('renders with text', () => {
        cy.mount(<RedButton>Click Me!</RedButton>)
        cy.get('button').should('have.text', 'Click Me!')
    })

    // applies onClick
    it('renders with onClick', () => {
        cy.mount(<RedButton onClick={() => {
        }}>Click Me!</RedButton>)
        cy.get('button').click()
    })
})