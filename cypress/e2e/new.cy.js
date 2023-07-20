describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')

    })

  /* ==== Test Created with Cypress Studio ==== */
  it('test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://opensource-demo.orangehrmlive.com');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('A');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear();
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123{enter}');
    cy.get('.oxd-button').click();
    /* ==== End Cypress Studio ==== */
  });
});