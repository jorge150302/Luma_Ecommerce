const checkAccount  = wordAccount => {
    cy.get('.col-main > .my-account > .dashboard > .page-title > h1').should('have.text', wordAccount);
  }

const checkEmail = requiredEmail => {
    cy.get('#advice-required-entry-email').should('have.text', requiredEmail)
}

const checkPassword = requiredPassword => {
    cy.get('#advice-required-entry-pass').should('have.text', requiredPassword)
}

const checkLogin = invalidLoginMessage => {
    cy.get('.error-msg > ul > li').should('have.text', invalidLoginMessage)
}

const checkSuccessMessage = successMessageForgotEmail => {
    cy.get('.success-msg > ul > li').should('contain', successMessageForgotEmail)
}

const whishlistMessage = addedToWhishlist => {
    cy.get('.success-msg > ul > li').should('contain', addedToWhishlist)
}

export default {
    checkAccount,
    checkEmail,
    checkPassword,
    checkLogin,
    checkSuccessMessage,
    whishlistMessage
}