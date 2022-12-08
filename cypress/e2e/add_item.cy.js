

describe ('Add item at car sussccefuly', ()=>  {

    beforeEach (()=>{
       cy.visit('/customer/account/login/')
       cy.login('pruebatesting654@gmail.com','Welcome1')
       cy.visit('/women/tops-blouses/elizabeth-knit-top-493.html')
       cy.fixture('addItems').as('data');
    })

    it('add item car', function(){
        
        cy.get(this.data.headerText).should('have.text', 'Elizabeth Knit Top');
        cy.get(this.data.button_color).click();
        cy.get(this.data.button_size).click();
        cy.get(this.data.qty_put).clear().type (2);
        cy.get(this.data.button_add).click();   
        cy.get(this.data.headerText).should('have.text','Shopping Cart');  

    })

    it('Add item- do not select color', function(){

        cy.get(this.data.button_size).click();
        cy.get(this.data.qty_put).clear().type (1);
        cy.get(this.data.button_add).click(); 
        cy.get(this.data.requiredColor).should('have.text', 'This is a required field.')    

    })

    it('Add item- do not select size', function(){

        cy.get(this.data.button_size).click();
        cy.get(this.data.qty_put).clear().type (1);
        cy.get(this.data.button_add).click(); 
        cy.get(this.data.requiredSize).should('have.text', 'This is a required field.')
    })

})