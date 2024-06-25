import config from './cypress.config'

describe('Verfiy GET API Request', () => {
    it('API - GET details', () => {
        cy.request({
            method: 'GET',
            url: `${config.URL}`,
            failOnStatusCode: false,
        }).as('details')
        //Validate status code
        cy.get('@details').its('status').should('eq', 200);
    })
})
