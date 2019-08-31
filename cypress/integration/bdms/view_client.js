// -- Start: Our Cypress Tests --

// -- view client page --

it('View Client test', () => {
    cy.visit('/client/view-client');
    cy.wait(3000);
    cy.get('.btn-primary').click();
});

// -- End: Our Cypress Tests --