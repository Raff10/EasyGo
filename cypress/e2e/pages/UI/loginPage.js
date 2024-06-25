class loginPage {
    enterURL() { 
        cy.visit('/'
         );
    }
    
     enterUserCredentials(username, password) {
         cy.get('[id="user-name"]').type(username);
         cy.get('[id="password"]').type(password);
         return this;
     }
     clickLoginButton() {
         cy.get('[type="submit"]').eq(0).click();
         return this;
     }
    }

    export default new loginPage();