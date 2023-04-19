// cypress/page-objects/HomePage.js

import BasePage from './BasePage';

class HomePage extends BasePage {
  visitSite() {
      cy.visit('https://blogdoagi.com.br/');
      this.setWindowSize(1366, 768);
  }

}

export default new HomePage();
