const FirstNameInput = () => {
    return cy.get('#firstname');
  }
  
  const MiddleNameInput = () => {
    return cy.get('#middlename');
  } 
   
  const LastNameInput = () => {
    return cy.get('#lastname');
  }

  const EmailInput = () => {
    return cy.get('#email_address');
  }

  const passwordInput = () => {
    return cy.get('#password')
  }
  
  const ConfirmpasswordInput = () => {
    return cy.get('#confirmation')
  }

  const CheckUp = () => {
    return cy.get('#is_subscribed')
  }

  const RegisterButton = () => {
    return cy.get('.buttons-set > .button')
  }
  
  export default {
    FirstNameInput,
    MiddleNameInput,
    LastNameInput,
    EmailInput,
    passwordInput,
    ConfirmpasswordInput,
    CheckUp,
    RegisterButton
  }