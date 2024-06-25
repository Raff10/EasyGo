class productsListPage {
    accessProduct(productName) {
        cy.get('[class="inventory_item_label"]').contains('Sauce Labs Backpack').click();
        return this;
    }

    clickShoppingCart() {
        cy.get('[id="shopping_cart_container"]').eq(0).click();
    }
}
export default new productsListPage();
