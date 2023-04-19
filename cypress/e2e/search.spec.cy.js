import HomePage from '../page-objects/HomePage';
import SearchPage from '../page-objects/SearchPage';

describe('Agi Bank blog search test', () => {

  let homePage;
  let searchPage;

  beforeEach(() => {
    homePage = new HomePage();
    searchPage = new SearchPage();

    homePage.visitSite();
  });

  afterEach(() => {
    cy.clearLocalStorage();
  });

  it('Search for tecnol on Blog do Agi', () => { 
    searchPage.search('tecnol');

    cy.contains('tecnol').should('exist');
  });

  it('Test hiding of search placeholder on Blog do Agi', () => { 
    searchPage.clickSearchButton();
    
    cy.get('.search-field:eq(0)').type('t').should('not.have.attr', 'placeholder', 'Pesquisar ...');
  });

  it('Test clearing search term on Blog do Agi', () => { 
    searchPage.clearSearchTerm();

    cy.get('.search-field:eq(0)').clear().should('have.attr', 'placeholder', 'Pesquisar …');
  });

});
