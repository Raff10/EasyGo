# Getting started
Coding test for job application at EasyGo
The test was done using the latest version of Cypress (Version 13), Javascirpt and Cucumber BDD tool.
To run the UI test locally, start by cloning the repo with the following command:

git clone git@github.com:Raff10/EasyGo.git

Navigate to the cloned directory and with nvm installed, run nvm install. This will install the current version of node the project requires.

# Requirements
Automation Tool used for this test suit is Cypress 13.12.0
In order to utilise this project, ensure you have the following installed:
- Visual Studio Code
- Chrome
- Node.js

  # Visual Studio Code Extensions
  The following extensions are recommendations to instal within Visual Studio Code
  - Cucumber (Gherkin) Full Support
  - Cucumber Step Definition Generator
  - ESLint
  - Feature Syntax Highlight and Snippets (Cucumber/Gherkin)
  - Gherkin Beautifer
  - Gherkin Indent
  - Gherkin Table Align


# Infrastructure
The UI test uses a dummy website designed for testing

# Execute
Execute the test in Cypress with npx cypress open then selecting the following:
1) E2E Testing
2) Chrome
3) select Start E2E Testing in Chrome
4) UI_Test.feature
