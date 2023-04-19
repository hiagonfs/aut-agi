export default class BasePage {

  setWindowSize(width, height) {
    cy.viewport(width, height);
  }

  visit(url) {
    cy.visit(url);
  }

}
  