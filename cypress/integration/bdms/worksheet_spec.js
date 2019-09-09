// -- Start: Our Cypress Tests --

describe('Worksheet page', function () {
    it('Update Worksheet', function () {
        cy.login();
        cy.visit('/workflow/worksheet-module');
        cy.get('#mat-tab-label-0-1').click();
        cy.wait(3000);
        cy.get(':nth-child(1) > a > span').click();
        cy.get(':nth-child(1) > .ng-select > .ng-select-container > .ng-value-container > .ng-input > .ng-star-inserted').click().type('Lev Lloyd{enter}');
        cy.get('#mat-tab-content-0-1').scrollTo('bottom');
        cy.scrollTo('0', '100%');
        cy.wait(2000);
        cy.get('.btn-primary').click({force: true});
        cy.get('#mat-tab-content-0-1').scrollTo('top');
        cy.scrollTo('0', '0%');
    });
});