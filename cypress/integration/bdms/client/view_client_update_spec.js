// -- Start: Our Cypress Tests --

describe('Update Client page', function () {
    it.skip('Update Entity', function () {
        cy.login();
        cy.visit('/client/view-client');
        cy.get(':nth-child(1) > .hover-icons__action').contains('edit').click();
        cy.scrollTo('bottom');                     // Scroll the window to bottom
        cy.get('.btn-primary').click({ force: true });
    });
});
