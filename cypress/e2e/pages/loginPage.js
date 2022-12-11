const emailInput = () => {
    return cy.get('#email');
  }
  
  const passwordInput = () => {
    return cy.get('#pass');
  } 
   
  const submitButton = () => {
    return cy.get('#send2');
  }
  
  
  export default {
    emailInput,
    passwordInput,
    submitButton
  }