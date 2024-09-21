const menList = () => {
  return cy.get(".nav-2 > .has-children").trigger("mouseover");
};

const womenlist = () => {
  return cy.get(".nav-1 > .has-children").trigger("mouseover");
};

const accessoriesList = () => {
  return cy.get(".nav-3 > .has-children").trigger("mouseover");
};

const homeAndDecorlist = () => {
  return cy.get(".nav-4 > .has-children").trigger("mouseover");
};

const saleList = () => {
  return cy.get(".nav-5 > .has-children").trigger("mouseover");
};

export default {
  menList,
  womenlist,
  accessoriesList,
  homeAndDecorlist,
  saleList,
};
