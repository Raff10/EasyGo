import { Given, When, Then, DataTable } from 'cypress-cucumber-preprocessor/steps';
import header from "../../pages/UI/headerPage.js";

//Click the shopping cart icon from header
When("I click shopping cart icon", () => {
    header.clickShoppingCartIcon();
});