import RegisterPage from "./pages/RegisterPage";

describe("Register tests", () => {
  beforeEach(() => {
    cy.visit("/customer/account/create/");
    cy.fixture("UserRegister").as("user");
    cy.fixture("locatorsRegister").as("element");
  });

  it("Let first name empty", function () {
    cy.Register(
      this.user.Empty,
      this.user.MiddleName,
      this.user.LastName,
      this.user.Email,
      this.user.Password,
      this.user.ConfirmPassword
    );
    cy.get(this.element.requieredFirstName).should(
      "have.text",
      this.element.TextRequired
    );
  });

  it("Let LastName empty", function () {
    cy.Register(
      this.user.FirstName,
      this.user.MiddleName,
      this.user.Empty,
      this.user.Email,
      this.user.Password,
      this.user.ConfirmPassword
    );
    cy.get(this.element.requieredLastName).should(
      "have.text",
      this.element.TextRequired
    );
  });

  it("Let Email empty", function () {
    cy.Register(
      this.user.FirstName,
      this.user.MiddleName,
      this.user.LastName,
      this.user.Empty,
      this.user.Password,
      this.user.ConfirmPassword
    );
    cy.get(this.element.requiredEmailAdress).should(
      "have.text",
      this.element.TextRequired
    );
  });

  it("Let Password empty", function () {
    cy.Register(
      this.user.FirstName,
      this.user.MiddleName,
      this.user.LastName,
      this.user.Email,
      this.user.Empty,
      this.user.ConfirmPassword
    );
    cy.get(this.element.requiredPassword).should(
      "have.text",
      this.element.TextRequired
    );
  });

  it("Let ConfirmationPassword empty", function () {
    cy.Register(
      this.user.FirstName,
      this.user.MiddleName,
      this.user.LastName,
      this.user.Email,
      this.user.Password,
      this.user.Empty
    );
    cy.get(this.element.requiredConfirmPassword).should(
      "have.text",
      this.element.TextRequired
    );
  });

  it("Enter an invalid email", function () {
    RegisterPage.EmailInput().type("jorgeluisalmanzar=@hy");
    RegisterPage.RegisterButton().click();
    cy.get(this.element.WrongEmail).should(
      "have.text",
      this.element.WrongEmailText
    );
  });
});
