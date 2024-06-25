class shoppingCartPage {
    verifyProduct(productName) {
        //where name = productName
        cy.get('[data-test="inventory-item-name"]').contains(productName);
        return this;
    }
}

export default new shoppingCartPage();