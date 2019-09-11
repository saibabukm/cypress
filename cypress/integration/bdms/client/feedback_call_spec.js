// -- Start: Our Cypress Tests --

describe('Feedback call page', function () {
    it('Add Feedback call', function () {
        cy.login();
        cy.visit('/client/feedback-call');
        cy.get('.open-dialog-btn').click();
        cy.get(':nth-child(1) > .ng-select > .ng-select-container > .ng-value-container > .ng-input > .ng-star-inserted').click();
        cy.get(':nth-child(1) > .ng-select > .ng-select-container > .ng-value-container > .ng-input > .ng-star-inserted').type('Lev Lloyd{enter}');

        cy.get('#mat-select-8').click();
        cy.get('#mat-option-37').click();

        cy.get('#mat-select-9').click();
        cy.get('#mat-option-41').click();

        cy.get('#mat-input-1').type('11-09-2019');

        cy.get('#mat-select-10').click();
        cy.get('#mat-option-44').click();

        cy.get('#mat-input-2').type('Aneasz');

        // Rate
        cy.get('#mat-input-4').type('2.3');
        cy.get('#mat-input-5').type('4.3');
        cy.get('#mat-input-6').type('4.3');
        cy.get('#mat-input-7').type('1.3');

        cy.get('#mat-input-3').type('Test');
        cy.get('.mat-select-placeholder').click();
        cy.get('#mat-option-55').click();
        cy.scrollTo('bottom');

        cy.get('.mat-select-placeholder').click();
        cy.get('#mat-option-56').click();
        cy.get('#mat-option-57').click();
        cy.get('#mat-option-58').click();

        cy.get('.cdk-overlay-backdrop').click();
        cy.scrollTo('bottom');

        cy.get('#mat-input-8').type('Test 01');
        cy.get('#mat-input-9').type('Test 02');
        cy.get('#mat-input-10').type('Test 03');

        cy.get('.btn-primary');

        cy.go('back');

        // Filter
        //cy.get('.download-icon > :nth-child(1) > a > .material-icons').click();
        //cy.get(':nth-child(1) > .ng-select > .ng-select-container > .ng-value-container > .ng-input > .ng-star-inserted').click();
        //cy.get(':nth-child(1) > .ng-select > .ng-select-container > .ng-value-container > .ng-input > .ng-star-inserted').type('Lev Lloyd{enter}');
        //cy.get('.btn-primary').click();

        // Update Action
        cy.get(':nth-child(1) > :nth-child(11) > ul > li > .mat-icon').click();
        cy.get('.mat-menu-content > :nth-child(4)').click();
        cy.scrollTo('bottom');

    });
});