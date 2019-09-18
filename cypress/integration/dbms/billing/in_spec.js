// -- Start: Our Cypress Tests --

describe('In Info page', function () {
    it('Add In', function () {
        cy.login();
        cy.visit('/billing/invoices/new-invoice');

        // Panel Title
        cy.get('.panel-title');
        cy.get('#mat-input-0').type('15-09-2019');
        cy.get('#mat-input-1').type('18-09-2019');
        cy.get('.mat-select-placeholder').click();
        cy.get('#mat-option-0').click();
        cy.get('.ng-input > .ng-star-inserted').type('Leah Lee{enter}');
        cy.get('.btn-primary');             

    });
});

// -- End: Our Cypress Tests --