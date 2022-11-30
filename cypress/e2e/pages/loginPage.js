const emailInput = () => {
    return cy.get('#email');
  }
  
  const passwordInput = () => {
    return cy.get('#pass');
  } 
   
  const submitButton = () => {
    return cy.get('#send2');
  }
  
  const checkAccount  = wordAccount => {
    cy.get('.col-main > .my-account > .dashboard > .page-title > h1').should('have.text', wordAccount);
  }
  
  export default {
    emailInput,
    passwordInput,
    submitButton,
    checkAccount
  }