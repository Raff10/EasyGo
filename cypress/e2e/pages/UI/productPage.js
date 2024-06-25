class productPage {
    clickAddToCartButton() { 
        cy.get('[id="add-to-cart"]').eq(0).click();
    }
}

export default new productPage();