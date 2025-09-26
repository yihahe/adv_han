import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checklist from './Checklist';

describe('Checklist', () => {
  const items = [
    { id: 1, text: 'One', checked: false },
    { id: 2, text: 'Two', checked: true },
  ];

  test('renders items with correct checked state', () => {
    render(<Checklist items={items} />);
    const cb1 = screen.getByLabelText('toggle-1');
    const cb2 = screen.getByLabelText('toggle-2');
    expect(cb1).toBeInTheDocument();
    expect(cb2).toBeInTheDocument();
    expect(cb1.checked).toBe(false);
    expect(cb2.checked).toBe(true);
  });

  test('toggles item and calls onChange', () => {
    const handleChange = jest.fn();
    render(<Checklist items={items} onChange={handleChange} />);
    const cb1 = screen.getByLabelText('toggle-1');
    fireEvent.click(cb1);
    expect(handleChange).toHaveBeenCalledTimes(1);
    const updated = handleChange.mock.calls[0][0];
    expect(updated.find(i => i.id === 1).checked).toBe(true);
  });
});
