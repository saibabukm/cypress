// -- Start: Our Cypress Tests --

describe('Manage User page', function () {

    it('Add USer', function () {
        cy.login();
        cy.visit('/administration/users');
        cy.get('.open-dialog-btn').click();
        cy.get('#mat-input-4').type('Test');
        cy.get('#mat-input-5').type('User');
        cy.get('#mat-input-6').type('09-09-2019');
    });
});