it('Logout test', () => {
    cy.wait(3000);
    cy.get('img.ng-star-inserted').click();
    cy.get('.profile__menu > :nth-child(3) > a').click();
});

// -- End: Our Application Code --