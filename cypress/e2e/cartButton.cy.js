import notification from "./components/notification";

describe("Validate Cart Buttons", () => {
  beforeEach(() => {
    cy.visit("/customer/account/login/");
    cy.login("pruebatesting654@gmail.com", "Welcome1");
    cy.visit("/women/tops-blouses/elizabeth-knit-top-493.html");
    cy.addtoCart(1);
    cy.visit("/customer/account/");
    cy.fixture("cartButton").as("locators");
  });

  it("Remuve Item Button", function () {
    cy.get(this.locators.information).should("have.text", "My Dashboard");
    cy.get(this.locators.cart_submit).click();
    cy.get(this.locators.remuved_item).click({ force: true });
    notification.MessageRemuvedSuccess("Item was removed successfully.");
  });

  it("Edit Item Button", function () {
    cy.get(this.locators.information).should("have.text", "My Dashboard");
    cy.get(this.locators.cart_submit).click();
    cy.get(this.locators.button_editItem).click({ force: true });
    notification.EditItemPage("In Stock");
  });

  it("View Shopping Cart", function () {
    cy.get(this.locators.information).should("have.text", "My Dashboard");
    cy.get(this.locators.cart_submit).click();
    cy.get(this.locators.viewShoppingCart).click({ force: true });
    notification.ViewShoppingCart("Shopping Cart");
  });

  it("Checkout Button", function () {
    cy.get(this.locators.information).should("have.text", "My Dashboard");
    cy.get(this.locators.cart_submit).click();
    cy.get(this.locators.button_checkout).click({ force: true });
    notification.CheckoutView("Your Checkout Progress");
  });
});
