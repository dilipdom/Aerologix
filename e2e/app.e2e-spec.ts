import { AerologixWebappPage } from './app.po';

describe('aerologix-webapp App', function() {
  let page: AerologixWebappPage;

  beforeEach(() => {
    page = new AerologixWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
