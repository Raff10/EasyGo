class headerPage {
    clickShoppingCartIcon() { 
        cy.get('[id="shopping_cart_container"]').eq(0).click();
        return this;
    }
}

export default new headerPage();