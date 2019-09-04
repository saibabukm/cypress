// -- Start: Our Application Code --

// Import credentials from fixture
import userObj from '../../fixtures/user';

describe('Login Page', function () {
    beforeEach(function () {
        cy.fixture('user').as('userObj');
    });

    it('Login Test', function () {
        cy.visit('/login');
        cy.get('#mat-input-0').type(userObj['Username']);
        cy.get('#mat-input-1').type(userObj['Password']);
        cy.get('.btn-primary').click();
        cy.wait(1500);
    });

});
