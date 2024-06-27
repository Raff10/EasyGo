# Getting started
Coding test for job application at EasyGo
The test was done using the latest version of Cypress (Version 13), Javascirpt and Cucumber BDD tool.
To download the repository onto your local machine, you will need to setup a SSH key to clone the repo

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
  - GitLens

# Infrastructure
The UI test uses a dummy website designed for testing

# Execute
Execute the test in Cypress with npx cypress open then selecting the following:
1) E2E Testing
2) Chrome
3) select Start E2E Testing in Chrome
4) UI_Test.feature

# Api code
The api code is located in the following file; Cypress/e2e/fearures/API/getApi.spec.js
