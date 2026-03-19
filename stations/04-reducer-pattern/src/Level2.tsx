import React, { useReducer, useState } from 'react';

// 🧠 WORKOUT START
type Action = 
  | { type: 'ADD_ITEM'; payload: string }
  | { type: 'REMOVE_ITEM'; payload: number };

function reducer(state: string[], action: Action): string[] {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
}

export default function Level2() {
  const [items, dispatch] = useReducer(reducer, []);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_ITEM', payload: inputValue });
      setInputValue('');
    }
  };

  return (
    <div>
      <h2>Level 2: Shopping Cart</h2>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add item..."
      />
      <button onClick={handleAdd}>Add Item</button>
      
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: index })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
