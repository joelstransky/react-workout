import React, { useReducer } from 'react';

// 🧠 WORKOUT START
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type State = {
  items: CartItem[];
};

type Action =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_ITEM':
      return {
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      return {
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        ),
      };
    default:
      return state;
  }
}

export default function Level3() {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  const totalPrice = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const addItem = (id: string, name: string, price: number) => {
    dispatch({ type: 'ADD_ITEM', payload: { id, name, price } });
  };

  return (
    <div>
      <h2>Level 3: Advanced Cart</h2>
      <div>
        <button onClick={() => addItem('1', 'Apple', 1.5)}>Add Apple ($1.5)</button>
        <button onClick={() => addItem('2', 'Banana', 2.0)}>Add Banana ($2.0)</button>
      </div>

      <ul data-testid="cart-list">
        {state.items.map(item => (
          <li key={item.id} data-testid={`item-${item.id}`}>
            {item.name} - ${item.price} x {item.quantity}
            <button 
              onClick={() => dispatch({ 
                type: 'UPDATE_QUANTITY', 
                payload: { id: item.id, quantity: item.quantity + 1 } 
              })}
            >
              +
            </button>
            <button 
              onClick={() => dispatch({ 
                type: 'UPDATE_QUANTITY', 
                payload: { id: item.id, quantity: item.quantity - 1 } 
              })}
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <p data-testid="total-price">Total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
}
