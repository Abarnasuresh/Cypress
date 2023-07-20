describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://sipcot-yavar.web.app')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('qwe', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://sipcot-yavar.web.app');
    cy.get('#username').click();
    cy.get('#username').clear('ed');
    cy.get('#username').type('edison@yavar.in');
    cy.get('#password').clear();
    cy.get('#password').type('Test@123');
    cy.get('.d-sm-inline').click();
    cy.get('.sidebar-nav > .nav > :nth-child(2) > .nav-link').click();
    cy.get('.ag-row-first > .ag-cell > ng-component > .btn-outline-success > .fa').click();
    cy.get('.cursor-pointer').click();
    cy.get('.ml-1').click();
    cy.get(':nth-child(3) > .nav-link').click();
    cy.get(':nth-child(5) > .nav-link > .nav-icon > img').click();
    cy.get('.ag-row-first > .ag-cell > ng-component > .btn-outline-primary').click();
    cy.get('#lowLevelThreshold').clear('4');
    cy.get('#lowLevelThreshold').type('4');
    cy.get('.d-sm-inline').click();
    cy.get(':nth-child(2) > .nav-link > .fs-3').click();
    cy.get('app-dashboard').click();
    cy.get(':nth-child(2) > .nav-link > .fs-3').click();
    cy.get('.cursor-pointer').click();
    /* ==== End Cypress Studio ==== */
  });
});