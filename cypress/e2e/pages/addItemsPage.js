
const  button_color = () => {
    return cy.get('#swatch21');
  }

  const button_size = ()=>{
    return cy.get ('#option79')
  }

  const button_add = ()=>{
    return cy.get ('.add-to-cart')
  }

  const qty_put = ()=>{
    return cy.get ('#qty')
  }

  export default{
    button_color,
    button_size,
    button_add,
    qty_put
  }