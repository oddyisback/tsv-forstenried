import { TsvForstenriedUpgradePage } from './app.po';

describe('tsv-forstenried-upgrade App', () => {
  let page: TsvForstenriedUpgradePage;

  beforeEach(() => {
    page = new TsvForstenriedUpgradePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
