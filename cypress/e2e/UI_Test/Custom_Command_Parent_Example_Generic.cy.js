// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function() {
    it('Visits the OrangeHRM Page and Perform Login Action', function() {
    //Visit the OrnageHRM Website
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //Calling Login Custom Command
    cy.LoginToAnyApp("input[placeholder='Username']","input[placeholder='Password']","button[type='submit']",'Admin','admin123')
    cy.xpath("//span[text()='PIM']").should('have.text','PIM')
    cy.xpath("//span[text()='Dashboard']").should('have.text','Dashboard')
    //Calling Logout Custom Command
    cy.Logout()
          
  })
    it('Visits the Web Order and Perform Login Action', function(){
      cy.visit("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx")
      cy.LoginToAnyApp("#ctl00_MainContent_username","#ctl00_MainContent_password","#ctl00_MainContent_login_button",'Tester','test')
    })
})