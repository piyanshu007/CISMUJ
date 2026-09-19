import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { SectionHeader } from './SectionHeader';

describe('Component: SectionHeader', () => {
  it('renders title and subtitle correctly', () => {
    render(
      <SectionHeader
        number="01"
        badgeText="RESEARCH LABS"
        title="ADVANCED NEURAL NETWORKS"
        subtitle="Exploring deep learning architectures and foundation models."
      />
    );

    expect(screen.getByText(/ADVANCED NEURAL NETWORKS/i)).toBeDefined();
    expect(screen.getByText(/RESEARCH LABS/i)).toBeDefined();
    expect(
      screen.getByText(/Exploring deep learning architectures/i)
    ).toBeDefined();
  });

  it('renders with centered alignment class when specified', () => {
    const { container } = render(
      <SectionHeader title="CENTERED HEADING" align="center" />
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('text-center');
  });
});
