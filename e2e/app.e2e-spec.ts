import { StudyingAngular2Page } from './app.po';

describe('studying-angular2 App', function() {
  let page: StudyingAngular2Page;

  beforeEach(() => {
    page = new StudyingAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
