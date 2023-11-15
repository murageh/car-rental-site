import React from 'react'
import {GooglePlayButton} from './Inputs'

describe('<GooglePlayButton />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<GooglePlayButton/>)
    })
})