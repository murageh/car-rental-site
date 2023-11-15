import React from 'react'
import {MakeFilter} from './SearchComponents'
import {Make, makeOptions} from "@/components/home/search/models";

const makes = makeOptions;
const selected = makes[0];
const onSelect = (option: Make) => {
    console.log('clicked');
}

describe('<MakeFilter />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<MakeFilter loading={false} options={makes} selected={selected} onSelect={onSelect}/>)
    })

    // test loading. look for .animate-pulse
    it('renders with loading', () => {
        cy.mount(<MakeFilter loading={true} options={makes} selected={selected} onSelect={onSelect}/>)
        cy.get('.animate-pulse').should('exist')
    })

    // test options
    it('renders with options', () => {
        cy.mount(<MakeFilter loading={false} options={makes} selected={selected} onSelect={onSelect}/>)
        cy.get('.make-button').should('have.length', 6)

        if (makes.length > 5) {
            // test last button to say "Explore <length> more+"
            cy.get('button').last().should('have.text', `Explore ${makes.length} more+`)
        }
    })

    // test selected
    it('renders with selected', () => {
        cy.mount(<MakeFilter loading={false} options={makes} selected={selected} onSelect={onSelect}/>)
        cy.get('.make-button.selected').should('exist').should('have.length', 1)
    })

    // test onSelect
    it('renders with onSelect', () => {
        cy.mount(<MakeFilter loading={false} options={makes} selected={selected} onSelect={onSelect}/>)
        cy.get('.make-button').first().click()
    })
})