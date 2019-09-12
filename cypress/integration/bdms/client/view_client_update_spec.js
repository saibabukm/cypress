// -- Start: Our Cypress Tests --

describe('Update Client page', function () {
    it('Update Entity', function () {
        cy.login();
        cy.visit('/client/view-client');
        cy.get('#mat-input-0').click();
        cy.get('#mat-input-0').type('Neville Cain{enter}');
        cy.get('[aria-describedby="cdk-describedby-message-68"] > .material-icons').contains('edit').click();

        // Software
        cy.get('#mat-tab-label-1-1 > .mat-tab-label-content').click();
        cy.get('.panel-title').contains('Update');
    });
});

// -- End: Our Cypress Tests --