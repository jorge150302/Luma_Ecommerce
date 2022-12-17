// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import loginPage from '../e2e/pages/loginPage'
import RegisterPage from '../e2e/pages/RegisterPage'
import notification from '../e2e/components/notification'
import addItemsPage from '../e2e/pages/addItemsPage'

// Login

Cypress.Commands.add('login', (email, pass) =>{
    loginPage.emailInput().type(email)
    loginPage.passwordInput().type(pass)
    loginPage.submitButton().click()
})

// Register

Cypress.Commands.add('Register', (Firstname, MiddleName, LastName, Email, Password, ConfirmPassword) =>{
    RegisterPage.FirstNameInput().type(Firstname)
      RegisterPage.MiddleNameInput().type(MiddleName)
      RegisterPage.LastNameInput().type(LastName)
      RegisterPage.EmailInput().type(Email)
      RegisterPage.passwordInput().type(Password)
      RegisterPage.ConfirmpasswordInput().type(ConfirmPassword)
      RegisterPage.CheckUp().click()
      RegisterPage.RegisterButton().click()
})

// AddItem

Cypress.Commands.add('AddItem', (Pruebas) =>{
    cy.get(Pruebas).click({force: true});
    notification.whishlistMessage('has been added to your wishlist');
})

// Add Item at cart

Cypress.Commands.add('addtoCart',(numberItem)=>{
    addItemsPage.button_color().click()
    addItemsPage.button_size().click()
    addItemsPage.qty_put().clear().type(numberItem)
    addItemsPage.button_add().click()
})