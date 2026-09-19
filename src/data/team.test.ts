import { describe, it, expect } from 'vitest';
import { CIS_TEAM_2026 } from './team';

describe('Team Dataset Integrity', () => {
  it('contains team members in CIS_TEAM_2026', () => {
    expect(CIS_TEAM_2026.length).toBeGreaterThan(0);
  });

  it('ensures every team member has required identifiers and metadata', () => {
    expect(CIS_TEAM_2026.length).toBeGreaterThan(0);

    CIS_TEAM_2026.forEach((member) => {
      expect(member.name).toBeDefined();
      expect(member.name.trim().length).toBeGreaterThan(0);
      expect(member.role).toBeDefined();
      expect(member.category).toBeDefined();
      expect(member.image).toMatch(/^(\/(team|logos|gallery)\/|https?:\/\/)/);
    });
  });

  it('validates categories include core team, heads, and coordinators', () => {
    const categories = Array.from(new Set(CIS_TEAM_2026.map((m) => m.category)));
    expect(categories.length).toBeGreaterThan(0);
    expect(categories).toContain('HEADS');
    expect(categories).toContain('COORDINATORS');
  });
});
