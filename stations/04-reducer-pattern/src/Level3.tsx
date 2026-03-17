import React, { useReducer } from 'react';

type CartItem = { id: string; name: string; quantity: number };
type State = { items: CartItem[] };
type Action = 
  | { type: 'ADD'; payload: { id: string; name: string } }
  | { type: 'REMOVE'; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        return {
          items: state.items.map(i => 
            i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        };
      }
      return { items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case 'REMOVE':
      return {
        items: state.items.filter(i => i.id !== action.payload)
      };
    default:
      return state;
  }
}

export default function Level3() {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  return (
    <div>
      <h2>Level 3: Quantity Cart</h2>
      <button onClick={() => dispatch({ type: 'ADD', payload: { id: '1', name: 'Apple' } })}>Add Apple</button>
      <button onClick={() => dispatch({ type: 'ADD', payload: { id: '2', name: 'Banana' } })}>Add Banana</button>
      
      <ul>
        {state.items.map(item => (
          <li key={item.id}>
            {item.name} (x{item.quantity})
            <button onClick={() => dispatch({ type: 'REMOVE', payload: item.id })}>Remove Entirely</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
