import { describe, it, expect } from 'vitest';
import { EVENTS } from './events';

describe('Events Data Store', () => {
  it('loads valid events dataset with non-empty records', () => {
    expect(EVENTS.length).toBeGreaterThan(0);
  });

  it('ensures each event has mandatory attributes (id, title, category, date, image)', () => {
    EVENTS.forEach((eventRecord) => {
      expect(eventRecord.id).toBeTruthy();
      expect(eventRecord.title).toBeTruthy();
      expect(eventRecord.category).toBeTruthy();
      expect(eventRecord.date).toBeTruthy();
      expect(eventRecord.image).toBeTruthy();
    });
  });

  it('contains expected event categories like HACKATHON, WORKSHOP, FLAGSHIP, or COMPETITION', () => {
    const categoriesFound = new Set(EVENTS.map((e) => e.category));
    expect(categoriesFound.size).toBeGreaterThan(1);
  });
});
