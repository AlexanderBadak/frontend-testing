/// <reference types="cypress" />
import React from 'react'

describe('Increment Views', () => {
    const buttonText = 'Increment (0)'
    const incrementedText = 'Increment (15)'

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('click increment once', () => {
        cy.intercept({
            method: 'GET',
            url: '*'
        }, {number: 3}).as('getRandomNumber')

        cy
            .findByText(buttonText)
            .click()
            .click()
            .click()
            .click()
            .click()

        cy.findByText(incrementedText)
    })
})