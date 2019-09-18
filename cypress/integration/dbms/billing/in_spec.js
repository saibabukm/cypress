// -- Start: Our Cypress Tests --

describe('In Info page', function () {
    it('Add In', function () {
        cy.login();
        cy.visit('/billing/invoices/dashboard');
        cy.get('.with-button-container > :nth-child(3)').click({force: true} );
        
        // Panel Title
        cy.get('.panel-title');
        cy.get('#mat-input-7').type('18-09-2019');
        cy.get('#mat-input-8').type('18-09-2019');
        cy.get('.mat-select-placeholder').click();
        cy.get('#mat-option-23 > .mat-option-text').click();
        cy.get('.ng-input > .ng-star-inserted').click().type('Leah Lee',{enter});

    });
});

// -- End: Our Cypress Tests --