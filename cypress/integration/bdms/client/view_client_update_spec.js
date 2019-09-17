// -- Start: Our Cypress Tests --

describe('Update Client page', function () {
    it.skip('Update Entity', function () {
        cy.login();
        cy.visit('/client/view-client');
        cy.get('#mat-input-0').click();
        cy.get('#mat-input-0').type('Leah Lee{enter}');
        cy.get('[aria-describedby="cdk-describedby-message-48"] > .material-icons').contains('edit').click();

        // Software
        cy.get('#mat-tab-label-1-1 > .mat-tab-label-content').click();
        cy.get('.panel-title').contains('Update');

        cy.get('#mat-select-14').click();
        cy.get('#mat-option-66').click();

        cy.get('#mat-input-13').type('79456');
        cy.get('#mat-input-14').type('123123');
        cy.get('#mat-input-15').type('user');

        cy.get('#mat-select-15').click();
        cy.get('#mat-option-85').click();

        cy.get('#mat-input-16').type('123');

        cy.get('#mat-select-16').click();
        cy.get('#mat-option-103').click();

        cy.get('#mat-select-17').click();
        cy.get('#mat-option-108').click();

        cy.get('#mat-select-18').click();
        cy.get('#mat-option-118').click();
        cy.get('.cdk-overlay-backdrop').click();
        cy.scrollTo('bottom');

        cy.get("iframe").then(function ($iframe) {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find('p').type("Hello Tester", { force: true });
        });

        cy.scrollTo(0, 0);

        cy.get('#mat-tab-label-1-1 > .mat-tab-label-content').click();

        cy.get('#mat-select-19').click();
        cy.get('#mat-option-152').click();

        cy.get('#mat-input-17').type('2020');

        cy.get('#mat-select-20').click();
        cy.get('#mat-option-155').click();

        cy.get('#mat-input-18').type('789456123');

        cy.get("iframe").then(function ($iframe) {
            const $body = $iframe.contents().find('body');

            cy.wrap($body).find('p').clear();
            cy.wrap($body).find('p').type("Hello Tester", { force: true });
        });

    });
});


// -- End: Our Cypress Tests --