describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('demo', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://opensource-demo.orangehrmlive.com');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('A');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear();
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123{enter}');
    cy.get('.oxd-button').click();
    cy.get(':nth-child(1) > .oxd-main-menu-item').click();
    cy.get('.orangehrm-header-container > .oxd-button').click();
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
    cy.get('.oxd-autocomplete-text-input > input').clear('m');
    cy.get('.oxd-autocomplete-text-input > input').type('m');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('A');
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin@123');
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear('T');
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Test@123');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('T');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Test@123');
    cy.get('.oxd-button--secondary').click();
    /* ==== End Cypress Studio ==== */
  });
})