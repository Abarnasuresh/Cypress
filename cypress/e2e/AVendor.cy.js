describe('template spec', () => {
  /* ==== Test Created with Cypress Studio ==== */
    it('demo', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://vendor.test.codingtown.com');
    cy.get('#username').type('demo.test@yopmail.com');
    cy.wait(1000)
    cy.get('#password').type('Tester@123');
    cy.wait(1000)
    cy.get('.d-sm-inline').click();
    cy.wait(2000)
    cy.get('#ag-75-input').check();
    cy.wait(2000)
    cy.get('app-loading-button > .btn').click({force:true});
    cy.wait(2000)
    cy.get('#confirmQty').clear('1');
    cy.wait(2000)
    cy.get('#confirmQty').type('1');
    cy.wait(2000)
    cy.get('.ng-input').click();
    cy.wait(2000)
    cy.get(".ng-dropdown-panel-items .ng-option:nth-child(4)").click() 
    cy.get('.d-sm-inline').click();
    cy.wait(2000)
    cy.get(':nth-child(5) > .nav-item > .nav-link').click();
    cy.wait(2000)
    cy.get('.cursor-pointer').click();
    /* ==== End Cypress Studio ==== */
  });
})