// -- Start: Our Cypress Tests --

describe('View Client page', function () {
    beforeEach(function () {
        cy.login();
    });

    it('visits the form', function () {
        cy.visit('/client/view-client');
    });

    it('Add new client', function () {
        cy.get('.btn-primary').click({ force: true });
    });

    it('requires Billing Name', function () {
        cy.get('#mat-input-3').click('client');
    });

});


// -- End: Our Cypress Tests --