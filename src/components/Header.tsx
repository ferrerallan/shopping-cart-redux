import React from 'react';
import ShoppingCart from './ShoppingCart';

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300">
      <div className="text-2xl font-bold">
        <h1>Goku Store</h1>
      </div>
      <div>
        <ShoppingCart />
      </div>
    </header>
  );
}

export default Header;
