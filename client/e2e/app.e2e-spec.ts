import { NycmonitoringappPage } from './app.po';

describe('nycmonitoringapp App', () => {
  let page: NycmonitoringappPage;

  beforeEach(() => {
    page = new NycmonitoringappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
