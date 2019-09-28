// -- Start: Our Cypress Tests --

describe('Per Info page', function () {
    it.skip('View Per Info', function () {
        cy.login();
        cy.visit('/system-setup/permanent-info');

        cy.get('#body > app-admin > div.admin-body-container.router-output > app-permanent-info > div > div.with-filter-grid-container > div.table-container.table-no-striped > div > div > table > tbody > tr:nth-child(1) > td:nth-child(12) > ul > li > a > mat-icon').click();
        cy.get('.mat-menu-content').contains('edit').click();
        cy.scrollTo('bottom');
    });
});

// -- End: Our Cypress Tests --        