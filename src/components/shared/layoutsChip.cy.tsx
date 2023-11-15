import React from 'react'
import {Chip} from './layouts'

describe('<Chip />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<Chip>children</Chip>)
        cy.get('.bg-primary').should('exist')
    });

    it('renders with title', () => {
        cy.mount(<Chip title={'title'}>children</Chip>)
        cy.get('.bg-primary').should('exist')
        cy.get('[title="title"]').should('exist')
    });

    it('renders with custom color', () => {
        cy.mount(<Chip color={'success'}>children</Chip>)
        cy.get('.bg-success').should('exist')
    });

    it('renders with custom size', () => {
        cy.mount(<Chip size={'lg'}>children</Chip>)
        cy.get('.text-base').should('exist')
    });

    it('renders with custom className', () => {
        cy.mount(<Chip className={'custom-class'}>children</Chip>)
        cy.get('.custom-class').should('exist')
    });

    it('renders with custom style', () => {
        cy.mount(<Chip style={{color: 'red'}}>children</Chip>)
        cy.get('.bg-primary').should('exist')
        cy.get('[style="color: red;"]').should('exist')
    });

    it('renders with children', () => {
        cy.mount(<Chip>children</Chip>)
        cy.get('.bg-primary').should('exist')
        cy.get(':contains("children")').should('exist')
    });
})