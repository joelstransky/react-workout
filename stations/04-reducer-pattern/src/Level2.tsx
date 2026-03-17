import React, { useReducer } from 'react';

type State = { items: string[] };
type Action = { type: 'ADD'; payload: string } | { type: 'REMOVE'; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD':
      return { items: [...state.items, action.payload] };
    case 'REMOVE':
      return { items: state.items.filter(item => item !== action.payload) };
    default:
      return state;
  }
}

export default function Level2() {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  return (
    <div>
      <h2>Level 2: Simple Cart</h2>
      <button onClick={() => dispatch({ type: 'ADD', payload: 'Apple' })}>Add Apple</button>
      <button onClick={() => dispatch({ type: 'ADD', payload: 'Banana' })}>Add Banana</button>
      <ul>
        {state.items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => dispatch({ type: 'REMOVE', payload: item })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
