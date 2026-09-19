import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Navbar Component', () => {
  it('renders logo link and primary navigation items', () => {
    render(<Navbar />);
    expect(screen.getByLabelText('IEEE CIS Home')).toBeTruthy();
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('About')).toBeTruthy();
    expect(screen.getByText('Events')).toBeTruthy();
    expect(screen.getByText('Team')).toBeTruthy();
    expect(screen.getByText('Newsletter')).toBeTruthy();
  });

  it('renders menu toggle button for mobile navigation', () => {
    render(<Navbar />);
    const menuButton = screen.getByLabelText('Open Navigation Menu');
    expect(menuButton).toBeTruthy();
  });
});
