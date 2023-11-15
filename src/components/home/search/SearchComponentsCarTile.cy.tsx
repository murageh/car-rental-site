import React from 'react'
import {CarTile} from './SearchComponents'
import {carDetails} from "@/components/home/search/models";

const car = carDetails[0];

describe('<CarTile />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<CarTile car={car}/>)
    })

    // check if the car image exists
    it('renders with car image', () => {
        cy.mount(<CarTile car={car}/>)
        cy.get('.car-img').should('exist')
    })

    // check if the car name exists
    it('renders with car name', () => {
        cy.mount(<CarTile car={car}/>)
        cy.get(':contains("Toyota Fortuner  - 2016")').should('exist')
    })

    // check if the car price exists
    it('renders with car price', () => {
        cy.mount(<CarTile car={car}/>)
        cy.get(':contains("5.5M")').should('exist')
    })

    // check if the car location exists
    it('renders with car location', () => {
        cy.mount(<CarTile car={car}/>)
        cy.get(':contains("Nairobi")').should('exist')
    })

    // test view details link
    it('renders with view details link', () => {
        cy.mount(<CarTile car={car}/>)
        cy.get(':contains("Visit car website")').should('exist')
    })
})