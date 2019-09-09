// -- Start: Our Cypress Tests --

describe('Billig Information page', function () {

    it.skip('Update Billing Information', function () {
        cy.login();
        cy.visit('/billing/billing-information');
        cy.get('.table-body').scrollTo(0, 0);
        cy.get(':nth-child(2)').contains('edit').click();
    });
});