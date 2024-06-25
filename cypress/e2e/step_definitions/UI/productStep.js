import { Given, When, Then, DataTable } from 'cypress-cucumber-preprocessor/steps';
import product from "../../pages/UI/productPage";

//Add product to cart
When("I add to cart", () => {
    product.clickAddToCartButton();
});