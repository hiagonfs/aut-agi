import BasePage from './BasePage';

const WINDOW_WIDTH = 1366;
const WINDOW_HEIGHT = 768;
const BASE_URL = 'https://blogdoagi.com.br/';

class HomePage extends BasePage {

  visitSite() {
    super.visit(BASE_URL);
    this.setWindowSize(WINDOW_WIDTH, WINDOW_HEIGHT);
  }

}

export default new HomePage();
