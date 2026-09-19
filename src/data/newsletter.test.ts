import { describe, it, expect } from 'vitest';
import { BROADSHEET_EDITIONS } from './newsletter';

describe('Newsletter Broadsheet Data Store', () => {
  it('contains published editions', () => {
    expect(BROADSHEET_EDITIONS.length).toBeGreaterThan(0);
  });

  it('validates broadsheet edition editorial contents', () => {
    BROADSHEET_EDITIONS.forEach((broadsheetEdition) => {
      expect(broadsheetEdition.id).toBeTruthy();
      expect(broadsheetEdition.issueNo).toBeTruthy();
      expect(broadsheetEdition.volumeNo).toBeTruthy();
      expect(broadsheetEdition.headline).toBeTruthy();
      expect(broadsheetEdition.leadArticleP1).toBeTruthy();
      expect(broadsheetEdition.sidebarArticles.length).toBeGreaterThan(0);
      expect(broadsheetEdition.highlights.length).toBeGreaterThan(0);
    });
  });
});
