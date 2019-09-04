// -- Start: Our Cypress Tests --

describe('View Client page', function () {

    it('Add new client', function () {
        cy.visit('/client/view-client');
        cy.wait(3000);
        cy.get('.btn-primary');
        cy.get('.btn-primary').click({ force: true });
        cy.get('#mat-input-3').type('client');

    });

});

// -- End: Our Cypress Tests --