// -- Start: Our Cypress Tests --

describe('Update User page', function () {
    it.skip('Edit USer', function () {
        cy.login();
        cy.visit('/administration/users');
        cy.get(':nth-child(1) > a > span').click();
        cy.get('#mat-input-2').type('saibabukm');
        cy.get('.btn-primary').click();
        cy.wait(3000);
        cy.get('.table-container').scrollTo('right');
        cy.get('.edit-icon').click()
        // cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click();
        // cy.wait(3000);
    });
});

// -- End: Our Cypress Tests --