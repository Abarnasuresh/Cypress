describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://vendor.test.codingtown.com')
    cy.get("#username").type('r.ragul@yavar.in')
    cy.get("#password").type('12345678')
    cy.get("button[title='Click to sign in']").click()
    cy.get("a[class='nav-link d-flex']").click()
    cy.get("button[title='Click to add new user']").click()
    cy.get("#firstName").type('sample')
    cy.get("#lastName").type('T')
    cy.get("#email").type('sample@yopmail.com')
    //dropdown
    cy.get('.ng-input>input').click()
    cy.get(".ng-dropdown-panel-items .ng-option:nth-child(4)").click()   //dropdown
  })
});