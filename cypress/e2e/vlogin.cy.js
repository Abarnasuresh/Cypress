describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://vendor.test.codingtown.com')

  })

  /* ==== Test Created with Cypress Studio ==== */
  it('test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://vendor.test.codingtown.com');
    cy.get('form.ng-untouched').click();
    cy.get('#username').type('demo.test@yopmail.com');
    cy.get('#password').clear('T');
    cy.get('#password').type('Tester@123{enter}');
    cy.get('.btn').click({force:true});
    cy.get('[comp-id="73"] > .ag-cell-wrapper').click();
    cy.get('.d-sm-inline').click({force:true});
    cy.get('#confirmQty').clear('10')
    cy.get('#confirmQty').type('1');
    cy.get('.ng-input').click();
    cy.get('.ng-dropdown-panel-items .ng-option:nth-child(4)').click();
    cy.get('.fs-3').click();
    cy.get('.cursor-pointer').click();
    /* ==== End Cypress Studio ==== */
  });
});