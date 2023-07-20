describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://vendor.test.codingtown.com')

    })
  /* ==== Test Created with Cypress Studio ==== */
  it('test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://vendor.test.codingtown.com');
    cy.get('#username').clear('r.ragul@yavar.in');
    cy.get('#username').type('r.ragul@yavar.in');
    cy.get('#password').clear('1');
    cy.get('#password').type('12345678{enter}');
    cy.get('.btn').click();
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get('.order-2 > .btn').click();
    cy.get('#firstName').clear('T');
    cy.get('#firstName').type('Test');
    cy.get('#lastName').clear();
    cy.get('#lastName').type('S');
    cy.get('#email').clear();
    cy.get('#email').type('test23@yopmai.com');
    cy.get('.ng-select-container').click();
    cy.get('#a1b94123a583-1 > .ng-option-label').click();
    cy.get('.d-sm-inline').click();
    cy.get('.fs-3').click();
    cy.get('.cursor-pointer').click();
    /* ==== End Cypress Studio ==== */
  });
})