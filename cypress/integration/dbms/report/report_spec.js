// -- Start: Our Cypress Tests --

describe('Report page', function () {
    it.skip('Add Report', function () {
        cy.login();
        cy.visit('/report/bank-report');

        cy.scrollTo(0, 500);
        cy.get('#mat-select-0').click();
        cy.get('#mat-option-15').click();

        cy.get('.mat-select-placeholder').click();
        cy.get('#mat-option-30').click();

        cy.get('.ng-input').click();
        cy.get('.ng-input > .ng-star-inserted').type('Lev Lloyd{enter}');

        cy.get('#mat-chip-list-0').trigger('mousedown', { which: 1 });
        cy.wait(1000);
        cy.get('#rightDragableModel').trigger('mousemove').trigger('mouseup');

        cy.get('#mat-chip-list-1').trigger('mousedown', { which: 1 });
        cy.wait(1000);
        cy.get('#rightDragableModel').trigger('mousemove').trigger('mouseup');

        cy.get('.btn-primary').click();
        cy.scrollTo('bottom');
    });
});

// -- End: Our Cypress Tests --