import { GgPage } from './app.po';

describe('gg App', function() {
  let page: GgPage;

  beforeEach(() => {
    page = new GgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
