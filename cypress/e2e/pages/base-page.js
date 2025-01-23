class BasePage {
  
   navigateTo(url){
    cy.visit(url);
  }
}
export default BasePage