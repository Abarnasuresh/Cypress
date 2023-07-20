describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://cms.codingtown.com')

    })

  /* ==== Test Created with Cypress Studio ==== */
  it('test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://cms.codingtown.com');
    cy.get('.btn').click();
    cy.get('#email').clear('togouser1@yopmail.com');
    cy.get('#email').type('togouser1@yopmail.com');
    cy.get('#password').clear('T');
    cy.get('#password').type('Test@123{enter}');
    cy.get(':nth-child(1) > .ng-tns-c103-0 > .btn').click({force:true});
    cy.get('.icon').click();
    cy.get(':nth-child(2) > .text-right > .btn').click();
    cy.get('main[_ngcontent-fsn-c27=""]').click();
    cy.get('label > .text-left').click();
    cy.get('#control_\\$0').check();
    cy.get('.container > .row > .text-right > .btn').click();
    cy.get('.is-highlighted').click();
    cy.get('div.col-md-6 > .form-control').click();
    cy.get('.card-body > app-loading-button > .btn > .ng-star-inserted > .btn-text').click();
    cy.get('.modal-body').click();
    cy.get('#acceptTerms').check();
    cy.get('.btn-dark').click();
    /* ==== End Cypress Studio ==== */
  });
});

