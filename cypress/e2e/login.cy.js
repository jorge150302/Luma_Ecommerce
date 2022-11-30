import loginPage from "./pages/loginPage"

describe('Login tests', () => {

    beforeEach(() =>{
      cy.visit('/customer/account/login/')
      cy.fixture('users').as('user');
      cy.fixture('locators').as('element');
    })

    it('login successfuly', function() {
        cy.login(this.user.email, this.user.password)
        loginPage.checkAccount('My Dashboard')
      //cy.get('h1').should('have text', 'MY DASHBOARD');

    })

    it('login - email empty', function() {
        cy.get(this.element.passwordinput).type(this.user.password);
        cy.get(this.element.submitbutton).click();
        cy.get(this.element.requiredemail).should('have.text', 'This is a required field.')
      })

    it('login - password empty', function() {
      cy.get(this.element.emailinput).type(this.user.email);
      cy.get(this.element.submitbutton).click();
      cy.get(this.element.requiredpass).should('have.text', 'This is a required field.')
      })
       


})

