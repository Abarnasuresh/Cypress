describe('template spec', () => {
  it('test', function() {
    cy.visit('https://vendor.test.codingtown.com');
    cy.wait(2000)
    cy.get('#username').type('demo.test@yopmail.com');
    cy.get('#password').type('Tester@123');
    cy.wait(2000)
    cy.get('.btn').click({force:true});
    cy.get('#ag-75-input').check();
    cy.get('.d-sm-inline').click({force:true});
    cy.get('#confirmQty').clear('5');
    cy.get('#confirmQty').type('1');
    cy.get('.ng-input').click();
    cy.get(".ng-dropdown-panel-items .ng-option:nth-child(2)").click() 
    cy.get('.d-sm-inline').click({force:true});
    cy.get('.mt-3 > .nav > :nth-child(2) > .nav-link').click();
    cy.get('.input-group > .form-control').clear('2');
    cy.get('.input-group > .form-control').type('2239');
    cy.wait(5000)
    cy.get('.ag-cell-wrapper').click({force:true});
    cy.get('.d-sm-inline').click();
    cy.get('#ewayNo').type('1234');
    cy.get('#vendorRef').type('123');

    cy.get('#deliveryDate').type('2023-10-20') // Selecting date 

    cy.get('.ng-input').click({force:true});
    cy.get('.ng-dropdown-panel-items .ng-option:nth-child(2)').click();
    cy.get('#vehicleNo').type('TN48CD1023');
    cy.get('#driverContact').type('9876543210');
    cy.get('#driver').type('Tester'); 
    cy.get('#buyer').type('Tester');
    cy.get('#shippingQty').type('1');
    cy.get('#vendorBatch').type('1');
    cy.get('#manufactureDate').type('2023-07-14');
    cy.get('#expiryDate').type('2023-12-20');
    cy.get('#expiryDate').click();
    cy.get('.d-sm-inline').click();
    cy.get('.btn-danger').click();
    cy.get(':nth-child(5) > .nav-item > .nav-link').click({force:true});
    cy.get('.cursor-pointer').click();
  });
});