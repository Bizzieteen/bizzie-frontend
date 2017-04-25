import { BizzieFrontendPage } from './app.po';

describe('bizzie-frontend App', () => {
  let page: BizzieFrontendPage;

  beforeEach(() => {
    page = new BizzieFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
