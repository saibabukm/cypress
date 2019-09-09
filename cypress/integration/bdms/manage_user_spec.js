// -- Start: Our Cypress Tests --

describe('Manage User page', function () {
    it.skip('Add USer', function () {
        cy.login();
        cy.visit('/administration/users');
        cy.get('.open-dialog-btn').click();
        cy.get('#mat-input-4').type('Test');
        cy.get('#mat-input-5').type('User');
        cy.get('#mat-input-6').type('09-09-1990');
        cy.get('#mat-input-7').type('testuser');
        cy.get('#mat-input-8').type('testuser@gmail.com');
        cy.get('#mat-input-9').type('213');

        cy.get('#mat-select-5').click();
        cy.get('#mat-option-74').click();

        cy.get('#mat-select-6').click();
        cy.get('#mat-option-76').click();

        cy.get('#mat-input-10').type('10');

        cy.get('#mat-select-7').click();
        cy.get('#mat-option-99').click();

        cy.get('#mat-select-8').click();
        cy.get('#mat-option-78').click();

        cy.get('#mat-select-9').click();
        cy.get('#mat-option-91').click();

        cy.get('.btn-primary');

    });
});