import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('Utility Function: cn()', () => {
  it('merges single and multiple class names properly', () => {
    expect(cn('px-4', 'py-2')).toBe('px-4 py-2');
  });

  it('handles conditional class names with falsy values', () => {
    expect(cn('base-class', false && 'hidden', undefined, null, 'active')).toBe(
      'base-class active'
    );
  });

  it('correctly resolves conflicting Tailwind utility classes', () => {
    expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
    expect(cn('p-4', 'p-6', 'px-8')).toBe('p-6 px-8');
  });
});
