// -- Start: Our Application Code --

// Import credentials from fixture
import userObj from '../../fixtures/user';

beforeEach(function() {
    cy.fixture('user').as('userObj');
});

it('Login Test', () => {
    cy.visit('/login');
    cy.get('#mat-input-0').type(userObj['Username']);
    cy.get('#mat-input-1').type(userObj['Password']);
    cy.get('.btn-primary').click();
});
