// -- Start: Our Cypress Tests --

describe('View Client page', function () {

    it('Add new client', function () {
        cy.visit('/client/view-client');
        cy.get('.btn-primary').click();
    });

});

// -- End: Our Cypress Tests --