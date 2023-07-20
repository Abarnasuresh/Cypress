describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://vendor.test.codingtown.com')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('tester', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://vendor.test.codingtown.com');
    cy.get('#username').clear('r');
    cy.get('#username').type('r.ragul@yavar.in');
    cy.get('#password').clear('1');
    cy.get('#password').type('12345678');
    cy.get('.d-sm-inline').click();
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get('.btn > .d-none').click();
    cy.get('#firstName').clear('t');
    cy.get('#firstName').type('tester');
    cy.get('#lastName').clear();
    cy.get('#lastName').type('T');
    cy.get('#email').clear();
    cy.get('#email').type('tester22@yopmail.com');
    cy.get('.ng-input > input').click();
    cy.get('#acf8072360a6-1 > .ng-option-label').click({ force: true });
    cy.get('ng-arrow-wrapper> :nth-child(2)').click()
    cy.get('.d-sm-inline').click();
    cy.get('.fs-3').click();
    cy.get('.cursor-pointer').click();
    /* ==== End Cypress Studio ==== */
  });
});