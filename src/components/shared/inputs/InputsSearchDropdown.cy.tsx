import React from 'react'
import {SearchDropdown} from './Inputs'

describe('<SearchDropdown />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<SearchDropdown
            id={''}
            icon={''}
            title={''}
            options={[]}
            selected={''}
            setSelected={() => {
            }}
        />)
    })

    // applies options
    it('renders with options', () => {
        cy.mount(<SearchDropdown
            id={''}
            icon={''}
            title={''}
            options={['option1', 'option2']}
            selected={''}
            setSelected={() => {
            }}
        />)
        cy.get('select option').should('have.length', 2)
        cy.get('select option').first().should('have.value', 'option1')
    })

    // applies selected
    it('renders with selected', () => {
        cy.mount(<SearchDropdown
            id={''}
            icon={''}
            title={''}
            options={['option1', 'option2']}
            selected={'option2'}
            setSelected={() => {
            }}
        />)
        cy.get('select').should('have.value', 'option2')
    })

})