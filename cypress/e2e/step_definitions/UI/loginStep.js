import { Given, When, Then, DataTable } from 'cypress-cucumber-preprocessor/steps';
import login from '../../pages/UI/loginPage';

//Navigate to the application
Given('I navigate to the application', () => {
    login.enterURL();
});

//Enter username and password
When("I enter user login credentials", (datatable) => {
    console.log("Before I check datatable")
    datatable.hashes().forEach((element) => {
        var elementUsernameString = element.Username.toString();
        var elementPasswordString = element.Password.toString();
        login.enterUserCredentials(elementUsernameString, elementPasswordString);
    });
});

//Click Login button
When("I click login button", () => {
    login.clickLoginButton();
})