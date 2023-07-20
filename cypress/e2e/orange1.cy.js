describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://vendor.test.codingtown.com');
    cy.get('#username').clear('demo.test@yopmail.com');
    cy.get('#username').type('demo.test@yopmail.com');
    cy.get('#password').clear('T');
    cy.get('#password').type('Tester@123{enter}');
    cy.get('.btn').click();
    cy.get('[comp-id="76"]').click();
    cy.get('.d-sm-inline').click();
    cy.get('#confirmQty').clear('1');
    cy.get('#confirmQty').type('1');
    cy.get('.ng-select-container').click();
    cy.get('#aa758f677dad-1 > .ng-option-label').click();
    cy.get('.d-sm-inline').click();
    /* ==== End Cypress Studio ==== */
  });
})