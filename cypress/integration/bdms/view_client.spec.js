// -- Start: Our Cypress Tests --

describe('View Client page', function () {

    it('Add Entity', function () { 
        cy.login();
        cy.visit('/client/view-client');
        cy.get('.btn-primary').click({ force: true });
        cy.wait(3000);
        cy.get('#mat-input-3').type('client');
    });

});

// -- End: Our Cypress Tests --