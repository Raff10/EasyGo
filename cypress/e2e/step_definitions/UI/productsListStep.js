import { Given, When, Then, DataTable } from 'cypress-cucumber-preprocessor/steps';
import productsList from "../../pages/UI/productsListPage";

//Access a product record
When("I access {string} product record", (productName) => {
    productsList.accessProduct(productName)
});
