import { ProejtoPage } from './app.po';

describe('proejto App', function() {
  let page: ProejtoPage;

  beforeEach(() => {
    page = new ProejtoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
