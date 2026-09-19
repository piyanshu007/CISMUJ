import { describe, it, expect } from 'vitest';
import { PROJECTS } from './projects';

describe('Projects Data Store', () => {
  it('loads valid project case studies', () => {
    expect(PROJECTS.length).toBeGreaterThan(0);
  });

  it('validates project structure with technical pipeline and benchmark metrics', () => {
    PROJECTS.forEach((projectCaseStudy) => {
      expect(projectCaseStudy.id).toBeTruthy();
      expect(projectCaseStudy.title).toBeTruthy();
      expect(projectCaseStudy.technologies.length).toBeGreaterThan(0);
      expect(projectCaseStudy.pipeline).toHaveProperty('input');
      expect(projectCaseStudy.pipeline).toHaveProperty('engine');
      expect(projectCaseStudy.pipeline).toHaveProperty('output');
      expect(projectCaseStudy.keyMetric).toBeTruthy();
    });
  });
});
