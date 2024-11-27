import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { addItem } from '../store/cartSlice';

function Form() {
  const dispatch = useDispatch<AppDispatch>();
  
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !price || !quantity) {
      alert('Please fill in all fields.');
      return;
    }


    dispatch(
      addItem({
        id: Date.now(), 
        name,
        price: parseFloat(price),
        quantity: parseInt(quantity, 10),
      })
    );

    setName('');
    setPrice('');
    setQuantity('');
  };

  return (
    <form
      onSubmit={handleAddItem}
      className="p-4 bg-white shadow-md rounded-lg max-w-md mx-auto"
    >
      <h2 className="text-lg font-semibold mb-4">Add Item to Cart</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Product Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          placeholder="Enter product name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          placeholder="Enter price"
          min="0"
          step="0.01"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          placeholder="Enter quantity"
          min="1"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </form>
  );
}

export default Form;
