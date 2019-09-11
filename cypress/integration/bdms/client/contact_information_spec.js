// -- Start: Our Cypress Tests --

describe('Contact Information page', function () {

    it('Add Conatct', function () {
        cy.login();
        cy.visit('/client/contact-information');
        cy.wait(3000);
        cy.get('span > .material-icons').click();
        cy.get('.ng-star-inserted > .material-icons').click();

        // Add
        cy.get('.ng-input > .ng-star-inserted').click();
        cy.get('.ng-input > .ng-star-inserted').type('Lev Lloyd{enter}');
        cy.get('#mat-select-4').click();
        cy.get('#mat-option-33 > .mat-option-pseudo-checkbox').click();
        cy.get('.cdk-overlay-backdrop').click();
        cy.get('#mat-select-5').click();
        cy.get('#mat-option-25').click();
        cy.get('#mat-input-6').type('Aneasz');
        cy.get('#mat-select-6').click();
        cy.get('#mat-option-30').click(); // Yes(No-29)
        cy.get('#mat-select-7').click();
        cy.get('#mat-option-32').click();
        cy.get('#mat-input-7').type('real1997@yop.ze.cx');
        cy.get('#mat-input-8').type('real1997@yop.ze2.cx'); // Cc
        cy.get('#mat-input-9').type('real1997@yop.ze3.cx'); // other
        cy.get('#mat-input-10').type('9876543210');
        cy.get('#mat-input-11').type('9876543211');
        cy.get('#mat-input-12').type('9876543212');
        cy.get('.btn-primary');
    });
});

// -- End: Our Cypress Tests --