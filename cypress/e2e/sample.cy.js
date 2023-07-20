// Describe the test suite
describe('My Web Application', () => {
  // Before each test, visit the website
  beforeEach(() => {
    cy.visit('https://vendor.test.codingtown.com')
  })

  // Test case 1: Verify the page title
  it('should have the correct page title', () => {
    cy.title().should('eq', 'Vendor Portal')
  })

  // Test case 2: Perform a login
  it('should allow users to login', () => {
    cy.get('#username').type('demo.test@yopmail.com')
    cy.get('#password').type('Tester@123')
    // cy.get('#SignIn-button').click()
    cy.get("button[title='Click to sign in']").click()
    
cy.get("input[placeholder='Enter atleast 3 letters...']").type('4500004632')

    // cy.get("input[data-testid='po-code']").type("4500004632");


    // Assert that the user is logged in
  //   cy.get('#welcome-message').should('contain', 'Welcome, User!')
  // })

  // // Test case 3: Add an item to the cart
  // it('should add an item to the cart', () => {
  //   cy.get('.product').first().click()
  //   cy.get('#add-to-cart-button').click()

  //   // Assert that the item is added to the cart
  //   cy.get('#cart-count').should('have.text', '1')
  })
})
