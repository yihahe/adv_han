import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('Good morning before noon', () => {
    const morning = new Date('2025-09-25T09:00:00');
    render(<Greeting name="Mina" now={morning} />);
    expect(screen.getByText(/Good morning Mina/i)).toBeInTheDocument();
  });

  test('Good afternoon after noon', () => {
    const afternoon = new Date('2025-09-25T13:00:00');
    render(<Greeting name="Lee" now={afternoon} />);
    expect(screen.getByText(/Good afternoon Lee/i)).toBeInTheDocument();
  });

  test('Good night between 8pm and midnight', () => {
    const night = new Date('2025-09-25T21:00:00');
    render(<Greeting name="Noah" now={night} />);
    expect(screen.getByText(/Good night Noah/i)).toBeInTheDocument();
  });
});
