// -- Start: Our Application Code --

// -- Start: Our Cypress Tests --

// Import credentials from fixture
import userObj from '../../../fixtures/user.json';

describe('Login Page', function () {
    beforeEach(function () {
        cy.fixture('user').as('userObj');
    });

    it.skip('Login Test', function () {
        cy.visit('/login');
        cy.get('#mat-input-0').type(userObj['Username']);
        cy.get('#mat-input-1').type(userObj['Password']);
        cy.get('.btn-primary').click();

    });
});

// -- End: Our Cypress Tests --