import notification from "./components/notification";
import menuDropdown from "./components/menuDropdown";

describe('Whishlist Test', function() {

    beforeEach(() =>{
        cy.visit('/customer/account/login/');
        cy.login('pruebatesting654@gmail.com','Welcome1')
        cy.fixture('locators').as('element');
      })


    it('menNewArrival', function() {
        menuDropdown.menList();
        cy.get(this.element.newArrivals).click();
        cy.get(this.element.addToWishlist1).click({force: true});
        notification.whishlistMessage('has been added to your wishlist');
    
    })

    it('accessoriesJewelry', function() {
        menuDropdown.accessoriesList();
        cy.get(this.element.jewerelyBracelets).click()
        cy.get(this.element.addToWishlist2).click()
        notification.whishlistMessage('has been added to your wishlist');
    })
   
   })
   