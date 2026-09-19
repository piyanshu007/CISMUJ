import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer Component', () => {
  it('renders chapter branding and official society title', () => {
    render(<Footer />);
    expect(screen.getByText('IEEE COMPUTATIONAL INTELLIGENCE SOCIETY')).toBeTruthy();
    expect(screen.getByText('MANIPAL UNIVERSITY JAIPUR STUDENT CHAPTER')).toBeTruthy();
  });

  it('renders quick navigation links and social icons', () => {
    render(<Footer />);
    expect(screen.getByLabelText('Instagram')).toBeTruthy();
    expect(screen.getByLabelText('LinkedIn')).toBeTruthy();
  });
});
