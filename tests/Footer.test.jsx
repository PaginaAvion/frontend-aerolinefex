import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer';

describe('Componente Footer', () => {
  it('renderiza el copyright de AerolineFex', () => {
    render(<Footer />);
    expect(screen.getByText(/AerolineFex/i)).toBeInTheDocument();
  });

  it('menciona el año 2026', () => {
    render(<Footer />);
    expect(screen.getByText(/2026/i)).toBeInTheDocument();
  });
});