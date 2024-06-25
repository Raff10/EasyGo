Feature: UI test for EasyGo

        Scenario: Login to application, access as record, update and save
            Given I navigate to the application
             When I enter user login credentials
                  | Username      | Password     |
                  | standard_user | secret_sauce |
              And I click login button
              And I access "Sauce Labs Backpack" product record
              And I add to cart
             When I click shopping cart icon
             Then product "Sauce Labs Backpack" is saved

