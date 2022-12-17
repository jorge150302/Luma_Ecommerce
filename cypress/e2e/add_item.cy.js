

import notification from "./components/notification"


describe ('Add item to cart sussccefuly', ()=>  {

    beforeEach (()=>{
       cy.visit('/customer/account/login/')
       cy.login('pruebatesting654@gmail.com','Welcome1')
       cy.visit('/women/tops-blouses/elizabeth-knit-top-493.html')
       cy.fixture('addItems').as('data');
    })

    it('add item cart', function(){
               
        notification.clotherMessage('Elizabeth Knit Top');
        cy.get(this.data.button_color).click();
        cy.get(this.data.button_size).click();
        cy.get(this.data.qty_put).clear().type (1);
        cy.get(this.data.button_add).click();   
        notification.ItemAddShoppingCart('Shopping Cart');  

    })

    it('Add item- do not select color', function(){

        cy.get(this.data.button_size).click();
        cy.get(this.data.qty_put).clear().type (1);
        cy.get(this.data.button_add).click(); 
        notification.MessageDoNotSelectColor('This is a required field.');    

    })

    it('Add item- do not select size', function(){

        cy.get(this.data.button_size).click();
        cy.get(this.data.qty_put).clear().type (1);
        cy.get(this.data.button_add).click(); 
        notification.MessageDoNotSelectSize('This is a required field.');
    })

})