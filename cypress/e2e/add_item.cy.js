import notification from "./components/notification";
import menuDropdown from "./components/menuDropdown";

describe("Add item to cart sussccefuly", () => {
  beforeEach(() => {
    cy.visit("/customer/account/login/");
    cy.login("pruebatesting654@gmail.com", "Welcome1");
    cy.fixture("addItems").as("data");
    cy.fixture("locators").as("element");
  });

  it("add item cart", function () {
    menuDropdown.womenlist();
    cy.get(this.element.WomenTop).click();
    cy.get(this.data.viewDetails).click({ force: true });
    notification.clotherMessage("Elizabeth Knit Top");
    cy.get(this.data.button_color).click();
    cy.get(this.data.button_size).click();
    cy.get(this.data.qty_put).clear().type(1);
    cy.get(this.data.button_add).click();
    notification.ItemAddShoppingCart("Shopping Cart");
  });

  it("Add item- do not select color", function () {
    menuDropdown.womenlist();
    cy.get(this.element.WomenTop).click();
    cy.get(this.data.viewDetails).click({ force: true });
    notification.clotherMessage("Elizabeth Knit Top");
    cy.get(this.data.button_size).click();
    cy.get(this.data.qty_put).clear().type(1);
    cy.get(this.data.button_add).click();
    notification.MessageDoNotSelectColor("This is a required field.");
  });

  it("Add item- do not select size", function () {
    menuDropdown.womenlist();
    cy.get(this.element.WomenTop).click();
    cy.get(this.data.viewDetails).click({ force: true });
    notification.clotherMessage("Elizabeth Knit Top");
    cy.get(this.data.button_size).click();
    cy.get(this.data.qty_put).clear().type(1);
    cy.get(this.data.button_add).click();
    notification.MessageDoNotSelectSize("This is a required field.");
  });
});
