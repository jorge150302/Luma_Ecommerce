const checkAccount = (wordAccount) => {
  cy.get(".col-main > .my-account > .dashboard > .page-title > h1").should(
    "have.text",
    wordAccount
  );
};

const checkEmail = (requiredEmail) => {
  cy.get("#advice-required-entry-email").should("have.text", requiredEmail);
};

const checkPassword = (requiredPassword) => {
  cy.get("#advice-required-entry-pass").should("have.text", requiredPassword);
};

const checkLogin = (invalidLoginMessage) => {
  cy.get(".error-msg > ul > li").should("have.text", invalidLoginMessage);
};

const checkSuccessMessage = (successMessageForgotEmail) => {
  cy.get(".success-msg > ul > li").should("contain", successMessageForgotEmail);
};

const whishlistMessage = (addedToWhishlist) => {
  cy.get(".success-msg > ul > li").should("contain", addedToWhishlist);
};

const clotherMessage = (identificationClother) => {
  cy.get("h1").should("contain", identificationClother);
};

const ItemAddShoppingCart = (PageCartShopping) => {
  cy.get("h1").should("contain", PageCartShopping);
};

const MessageDoNotSelectColor = (AddItemDonotSelectColor) => {
  cy.get("#advice-required-entry-attribute92").should(
    "contain",
    AddItemDonotSelectColor
  );
};

const MessageDoNotSelectSize = (AddItemDoNotSelectSize) => {
  cy.get(".validation-advice").should("contain", AddItemDoNotSelectSize);
};

const MessageRemuvedSuccess = (RemuveItemCart) => {
  cy.get("#minicart-success-message").should("contain", RemuveItemCart);
};

const EditItemPage = (EditItem) => {
  cy.get(".value").should("contain", EditItem);
};

const ViewShoppingCart = (ShoppingCart) => {
  cy.get("h1").should("contain", ShoppingCart);
};

const CheckoutView = (InformationCheckout) => {
  cy.get(".block-title").should("contain", InformationCheckout);
};

export default {
  checkAccount,
  checkEmail,
  checkPassword,
  checkLogin,
  checkSuccessMessage,
  whishlistMessage,
  clotherMessage,
  ItemAddShoppingCart,
  MessageDoNotSelectColor,
  MessageDoNotSelectSize,
  MessageRemuvedSuccess,
  EditItemPage,
  ViewShoppingCart,
  CheckoutView,
};
