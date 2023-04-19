import HomePage from '../page-objects/HomePage';
import SearchPage from '../page-objects/SearchPage';

describe('Agi Bank blog search test', () => {
  it('Search for tecnol on Blog do Agi', () => { 
    HomePage.visitSite();
    SearchPage.search('tecnol');

    // Assert that there is at least one element containing the word "tecnol" on the page
    cy.contains('tecnol').should('exist');
  });

  it('Test hiding of search placeholder on Blog do Agi', () => { 
    HomePage.visitSite();
    SearchPage.clickSearchButton();
    
    // Assert that the search placeholder is hidden when a character is typed
    cy.get('.search-field:eq(0)').type('t').should('not.have.attr', 'placeholder', 'Pesquisar ...');
  });
});
