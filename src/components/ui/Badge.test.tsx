import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge UI Component', () => {
  it('renders badge children text correctly', () => {
    render(<Badge>COMPUTATIONAL INTELLIGENCE</Badge>);
    expect(screen.getByText('COMPUTATIONAL INTELLIGENCE')).toBeTruthy();
  });

  it('renders with variant styles and optional pulse dot', () => {
    const { container } = render(
      <Badge variant="blue" dot>
        FEATURED
      </Badge>
    );
    expect(screen.getByText('FEATURED')).toBeTruthy();
    const dotElement = container.querySelector('.rounded-full.bg-sky-600');
    expect(dotElement).toBeTruthy();
  });
});
