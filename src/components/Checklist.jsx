import React, { useState, useEffect } from 'react';

/**
 * Checklist
 * props:
 * - items: array of { id: string|number, text: string, checked?: boolean }
 * - onChange: function(updatedItems)
 */
const Checklist = ({ items = [], onChange }) => {
  const [state, setState] = useState(() => items.map(i => ({ ...i, checked: !!i.checked })));

  useEffect(() => {
    setState(items.map(i => ({ ...i, checked: !!i.checked })));
  }, [items]);

  const toggle = (id) => {
    const updated = state.map(i => i.id === id ? { ...i, checked: !i.checked } : i);
    setState(updated);
    if (onChange) onChange(updated);
  };

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {state.map(item => (
        <li key={item.id} style={{ marginBottom: 8 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type="checkbox"
              checked={!!item.checked}
              onChange={() => toggle(item.id)}
              aria-label={`toggle-${item.id}`}
            />
            <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>{item.text}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default Checklist;
