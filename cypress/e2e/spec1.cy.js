describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://vendor.test.codingtown.com')
    cy.get("#username").type("demo.test@yopmail.com")
    cy.get("#password").type("Tester@123")
    cy.get("button[title='Click to sign in']").click()
    cy.get("a[aria-controls='confirmedPO']").click() // Confirmed Po tab
    cy.get("div[class='ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first ag-after-created'] button[aria-label='edit']").click() //Update Po page
    cy.get("input[inputmode='numeric']").clear().type('1') // Confirmed Qty is changed to 1
    cy.get(".ng-select-container.ng-has-value").click()
    cy.get("#ab79da954b09-3").value('power issues')
    })
})
//last

