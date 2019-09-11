// -- Start: Our Cypress Tests --

describe('Logout page', function () {

    it.skip('Logout test', () => {
        cy.wait(3000);
        cy.get('img.ng-star-inserted').click();
        cy.get('.profile__menu > :nth-child(3) > a').click();
    });

});

// -- End: Our Cypress Tests --

// -- End: Our Application Code --