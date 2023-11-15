import React from 'react'
import {AppleStoreButton} from './Inputs'

describe('<AppleStoreButton />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<AppleStoreButton/>)
    })
})