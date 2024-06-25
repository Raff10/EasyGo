import { Given, When, Then, DataTable } from 'cypress-cucumber-preprocessor/steps';
import shoppingCart from "../../pages/UI/shoppingCartPage";

Then("product {string} is saved", (productName) => {
    shoppingCart.verifyProduct(productName);
});