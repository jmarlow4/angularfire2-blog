import { Angularfire2BlogPage } from './app.po';

describe('angularfire2-blog App', function() {
  let page: Angularfire2BlogPage;

  beforeEach(() => {
    page = new Angularfire2BlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
