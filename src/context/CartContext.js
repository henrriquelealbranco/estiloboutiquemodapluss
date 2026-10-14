import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const key = `${action.payload.id}-${action.payload.selectedSize}-${action.payload.selectedColor}`;
      const existing = state.find((i) => i.cartKey === key);
      if (existing) {
        return state.map((i) =>
          i.cartKey === key ? { ...i, quantity: i.quantity + action.payload.quantity } : i
        );
      }
      return [...state, { ...action.payload, cartKey: key }];
    }
    case 'REMOVE_ITEM':
      return state.filter((i) => i.cartKey !== action.payload);
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        return state.filter((i) => i.cartKey !== action.payload.cartKey);
      }
      return state.map((i) =>
        i.cartKey === action.payload.cartKey ? { ...i, quantity: action.payload.quantity } : i
      );
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    try {
      return JSON.parse(localStorage.getItem('eb_cart')) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('eb_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const addToCart = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeFromCart = (cartKey) => dispatch({ type: 'REMOVE_ITEM', payload: cartKey });
  const updateQuantity = (cartKey, quantity) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { cartKey, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });
  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return React.createElement(
    CartContext.Provider,
    {
      value: {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      },
    },
    children
  );
}

export const useCart = () => useContext(CartContext);
