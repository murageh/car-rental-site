import React from 'react'
import {CarTileList} from './SearchComponents'
import {carDetails} from "@/components/home/search/models";

const cars = carDetails.slice(0, 3);

describe('<CarTileList />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<CarTileList cars={cars}/>)
    })

    // check if the car tiles exist
    it('renders with car tiles', () => {
        cy.mount(<CarTileList cars={cars}/>)
        cy.get('.car-tile').should('have.length', 3)
    })
})