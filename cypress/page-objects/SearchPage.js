export default class SearchPage {

  clickSearchButton() {
    cy.get('#search-open')
          .click();
  }

  search(term) {
    this.clickSearchButton();
    cy.get('.search-field:eq(0)')
        .type(term)
        .type('{enter}');
}

  clearSearchTerm() {
    this.clickSearchButton();
    cy.get('.search-field:eq(0)').type('t').clear();
  }
  
} 