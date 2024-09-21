import menuDropdown from "./components/menuDropdown";

describe("Whishlist Test", function () {
  beforeEach(() => {
    cy.visit("/customer/account/login/");
    cy.login("pruebatesting654@gmail.com", "Welcome1");
    cy.fixture("locators").as("element");
  });

  context("Women", () => {
    it("WomenNewArrival", function () {
      menuDropdown.womenlist();
      cy.get(this.element.WomennewArrivals).click();
      cy.AddItem(this.element.addToWishlist1);
    });

    it("WomenTop", function () {
      menuDropdown.womenlist();
      cy.get(this.element.WomenTop).click();
      cy.AddItem(this.element.addToWishlist1);
    });

    it("WomenPants", function () {
      menuDropdown.womenlist();
      cy.get(this.element.WomenPants).click();
      cy.AddItem(this.element.addToWishlist1);
    });

    it("WomenDresses", function () {
      menuDropdown.womenlist();
      cy.get(this.element.WomenDresses).click();
      cy.AddItem(this.element.addToWishlist1);
    });
  });

  context("Men", () => {
    it("MennewArrivals", function () {
      menuDropdown.menList();
      cy.get(this.element.MennewArrivals).click();
      cy.AddItem(this.element.addToWishlist1);
    });

    it("Menshirts", function () {
      menuDropdown.menList();
      cy.get(this.element.Menshirts).click();
      cy.AddItem(this.element.addToWishlist1);
    });

    it("MenTees", function () {
      menuDropdown.menList();
      cy.get(this.element.MenTees).click();
      cy.AddItem(this.element.addToWishlist1);
    });

    it("MenPants", function () {
      menuDropdown.menList();
      cy.get(this.element.MenPants).click();
      cy.AddItem(this.element.addToWishlist1);
    });

    it("MenBlazzers", function () {
      menuDropdown.menList();
      cy.get(this.element.MenBlazers).click();
      cy.AddItem(this.element.addToWishlist1);
    });
  });

  context("Accessories", () => {
    it("accessoriesJewelry", function () {
      menuDropdown.accessoriesList();
      cy.get(this.element.AccessoriesJewerly).click();
      cy.AddItem(this.element.addToWishlist1);
    });

    it("accessoriesShoes", function () {
      menuDropdown.accessoriesList();
      cy.get(this.element.AccessoriesShoes).click();
      cy.AddItem(this.element.addToWishlist1);
    });

    it("accessoriesBag", function () {
      menuDropdown.accessoriesList();
      cy.get(this.element.AccessoriesBag).click();
      cy.AddItem(this.element.addToWishlist1);
    });
  });

  context("Home & Decor", () => {
    it("Home & Decor - Books & Music", function () {
      menuDropdown.homeAndDecorlist();
      cy.get(this.element.HDBookMusic).click();
      cy.AddItem(this.element.addToWishlist1);
    });

    it("Home & Decor - Bed & Bath", function () {
      menuDropdown.homeAndDecorlist();
      cy.get(this.element.HDBedBath).click();
      cy.AddItem(this.element.addToWishlist1);
    });

    it("Home & Decor - Electronics", function () {
      menuDropdown.homeAndDecorlist();
      cy.get(this.element.HDElectronics).click();
      cy.AddItem(this.element.addToWishlist1);
    });

    it("Home & Decor - Decoractive Accent", function () {
      menuDropdown.homeAndDecorlist();
      cy.get(this.element.HDDecorative).click();
      cy.AddItem(this.element.addToWishlist1);
    });
  });
});
