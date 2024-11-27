import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { addItem, removeItem } from '../store/cartSlice';

function ShoppingCart() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleAddItem = () => {
    dispatch(addItem({ id: 1, name: 'Product 1', price: 10, quantity: 1 }));
  };

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-80">
      <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
      <ul className="space-y-2">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center">
            <span>
              {item.name} - ${item.price} x {item.quantity}
            </span>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="text-red-600 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul> 
    </div>
  );
}

export default ShoppingCart;
