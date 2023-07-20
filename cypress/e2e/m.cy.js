describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://cms.codingtown.com')

    })

  /* ==== Test Created with Cypress Studio ==== */
  it('test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://cms.codingtown.com');
    cy.get('.btn > span').click();
    cy.get('#email').type('togouser1@yopmail.com');
    cy.get('#password').type('Test@123{enter}');
    cy.get(':nth-child(1) > .ng-tns-c103-0 > .btn').click();
    cy.get('#pr_id_1 > .p-carousel-content > .p-carousel-container > .p-carousel-items-content > .p-carousel-items-container > .p-carousel-item-start > app-cart-products.ng-star-inserted > .product-item > .card > .image > .card-img-top').click();
    cy.get('#boxType').click();
    cy.get('#aa42dd7eb8d5-1').click();
    cy.get('.modal-footer > .btn').click();
    cy.get('app-loading-button > .btn').click();
    cy.get(':nth-child(7) > .btn > span').click();
    cy.get('.dropdown-menu > :nth-child(2)').click();
    /* ==== End Cypress Studio ==== */
  });
});