import React from 'react'
import CircularProgressBar from './CircularProgressBar'

const verifyCSSVar = (selector: string, varName: string, expectedValue: string) => {
    cy.get(selector)
        .then(($el) => {
            cy.window()
                .then((win) => {
                    const style = win.getComputedStyle($el[0])
                    expect(style.getPropertyValue(varName)).to.equal(expectedValue)
                })
        })
}

describe('<CircularProgressBar />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<CircularProgressBar/>)
    })

    // white text
    it('renders with white text', () => {
        cy.mount(<CircularProgressBar headline={'Sample text'}/>)
        cy.get('div[role="progressbar"]').should('have.css', 'color', 'rgb(255, 255, 255)')
        verifyCSSVar('div[role="progressbar"]', '--color', 'white')
    })

    // applies progress
    it('renders with progress', () => {
        cy.mount(<CircularProgressBar progress={50}/>)
        cy.get('div[role="progressbar"]').should('have.attr', 'aria-valuenow', '50')
        verifyCSSVar('div[role="progressbar"]', '--value', '50')
    })

    // applies offset
    it('renders with offset', () => {
        cy.mount(<CircularProgressBar offset={50}/>)
        verifyCSSVar('div[role="progressbar"]', '--offset', '50')
    })
})