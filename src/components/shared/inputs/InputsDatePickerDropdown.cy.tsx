import React from 'react'
import {DatePickerDropdown} from './Inputs'

describe('<DatePickerDropdown />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<DatePickerDropdown
            id={''}
            icon={''}
            title={''}
            defaultValue={''}
            onChange={(v) => {
            }}
        />)
    })

    // applies selected
    it('renders with selected', () => {
        cy.mount(<DatePickerDropdown
            id={''}
            icon={''}
            title={''}
            defaultValue={'2020-01-01'}
            onChange={(v) => {
            }}
        />)
        cy.get('input').should('have.value', '2020-01-01')
    })

})