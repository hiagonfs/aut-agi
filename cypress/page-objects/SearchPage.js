// cypress/page-objects/SearchPage.js

class SearchPage {
  search(term) {
      cy.get('#search-open')
          .click()
          .type(term)
          .type('{enter}');
  }

  clickSearchButton() {
    cy.get('#search-open')
          .click();
  }
}
  
export default new SearchPage();
  