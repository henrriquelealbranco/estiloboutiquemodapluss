import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
  image: string;
  cartKey?: string;
  category?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (cartKey: string) => void;
  updateQuantity: (cartKey: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { cartKey: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<CartContextType | undefined>(undefined);

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
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
        i.cartKey === action.payload.cartKey
          ? { ...i, quantity: action.payload.quantity }
          : i
      );
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    try {
      return JSON.parse(localStorage.getItem('eb_cart') || '[]') || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('eb_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Erro ao salvar carrinho no localStorage:', e);
    }
  }, [cart]);

  const addToCart = (item: CartItem) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeFromCart = (cartKey: string) => dispatch({ type: 'REMOVE_ITEM', payload: cartKey });
  const updateQuantity = (cartKey: string, quantity: number) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { cartKey, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};
