// -- Start: Our Cypress Tests --

describe('View Client page', function () {

    it('Add Entity', function () {
        cy.login();
        cy.visit('/client/view-client');
        cy.get('.btn-primary').click({ force: true });
        cy.wait(3000);
        cy.get('#mat-input-1').type('BN Test');
        cy.get('#mat-input-2').type('LN Test');
        cy.get('#mat-input-3').type('TN Test');
        cy.get('#mat-input-4').type('05-09-2019');
        cy.get('#mat-input-5').type('10');
        cy.wait(500);

        cy.get('#mat-select-0').click();
        cy.get('#mat-option-0').click();

        cy.get('#mat-input-6').type('43045678910');
        cy.get('#mat-input-7').type('763');
        cy.get('#mat-input-8').type('05-09-2019');
        cy.get('#mat-input-9').type('779');
        cy.get('#mat-input-10').type('sole proprietorship');

        cy.get('#mat-select-1').click();
        cy.get('#mat-option-8').click();

        cy.get('#mat-select-2').click();
        cy.get('#mat-option-10').click();

        cy.get('#mat-select-3').click();
        cy.get('#mat-option-14').click();

        cy.get('#mat-input-11').type('01-01-2019');

        cy.get('#mat-select-4').click();
        cy.get('#mat-option-17').click();

        cy.get('#mat-select-5').click();
        cy.get('#mat-option-24').click();

        cy.get('#mat-select-6').click();
        cy.get('#mat-option-25').click();

        cy.get('#mat-select-7').click();
        cy.get('#mat-option-29').click();

        cy.get('#mat-select-8').click();
        cy.get('#mat-option-31').click();

        cy.get('#mat-select-9').click();
        cy.get('#mat-option-35').click();

        cy.get('#mat-select-10').click();
        cy.get('#mat-option-38').click();

        cy.get('#mat-select-11').click();
        cy.get('#mat-option-45').click();

        cy.get('#mat-select-12').click();
        cy.get('#mat-option-40').click();

        cy.get('#mat-input-12').type('https://www.theaustralian.com.au');

        cy.get('.btn-primary');
    });

});

// -- End: Our Cypress Tests --