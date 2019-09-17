// -- Start: Our Cypress Tests --

describe('Report page', function () {
    it('Add Report', function () {
        cy.login();
        cy.visit('/report/bank-report');

        cy.scrollTo(0, 500);
        cy.get('#mat-select-0').click();
        cy.get('#mat-option-15').click();

        cy.get('.mat-select-placeholder').click();
        cy.get('#mat-option-30').click();

        cy.get('.ng-input').click();
        cy.get('.ng-input > .ng-star-inserted').type('Lev Lloyd{enter}');
    });
});

// -- End: Our Cypress Tests --