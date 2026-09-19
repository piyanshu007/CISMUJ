import { describe, it, expect } from 'vitest';
import { CHAPTER_STATS_DATA } from './stats';

describe('Chapter Stats Data Store', () => {
  it('contains telemetry stats metrics', () => {
    expect(CHAPTER_STATS_DATA.length).toBeGreaterThan(0);
  });

  it('validates each metric structure', () => {
    CHAPTER_STATS_DATA.forEach((metricItem) => {
      expect(metricItem.id).toBeTruthy();
      expect(metricItem.metric).toBeTruthy();
      expect(metricItem.growth).toBeTruthy();
      expect(metricItem.label).toBeTruthy();
      expect(['matrix', 'avatars', 'sparkline', 'progress']).toContain(metricItem.type);
    });
  });
});
