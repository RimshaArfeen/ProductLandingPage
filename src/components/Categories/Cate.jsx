import React, { useState, useEffect } from 'react';
import Cappuccino from "./cappuccino-.png"
import BlackCoffee from "./black-coffee.png"
import expresso from "./expresso.png"
import IcedCoffee from "./iced-caramel.webp"

// Main component for the Coffee Shop's categories and ordering page
export default function App() {
  const coffeePrices = {
    'Black Coffee': 10,
    'Iced Coffee': 17,
    'Cappuccino': 10,
    'Espresso': 8.5,
  };

  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  // Function to add an item to the cart
  const addToCart = (type) => {
    setCart(prevCart => ({
      ...prevCart,
      [type]: {
        qty: (prevCart[type]?.qty || 0) + 1,
        price: coffeePrices[type],
      },
    }));
  };

  // Function to delete an item from the cart
  const deleteFromCart = (type, all = false) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (all || (newCart[type]?.qty || 0) <= 1) {
        delete newCart[type];
      } else {
        newCart[type].qty -= 1;
      }
      return newCart;
    });
  };

  // Calculate the total price of all items in the cart
  const calculateTotalPrice = () => {
    return Object.values(cart).reduce((total, item) => total + item.qty * item.price, 0).toFixed(2);
  };

  // Calculate the total number of items in the cart
  const calculateTotalItems = () => {
    return Object.values(cart).reduce((total, item) => total + item.qty, 0);
  };

  // Component to display the product grid
  const ProductGrid = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Product Card: Cappuccino */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <img
            alt="Cappuccino"
            className="w-full h-48 object-cover"
            src={Cappuccino}
          />
          <div className="p-6 text-center">
            <h3 className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-1">Coffee</h3>
            <h2 className="text-gray-900 text-2xl font-bold mb-2">Cappuccino</h2>
            <p className="text-gray-600 text-base mb-4">Creamy and frothy, a delightful treat.</p>
            <p className="text-blue-600 text-2xl font-extrabold mb-4">${coffeePrices['Cappuccino']}</p>
            <button
              className="w-full bg-amber-700 text-white font-bold py-3 rounded-lg shadow-md transition-colors duration-200 hover:bg-blue-700"
              onClick={() => addToCart('Cappuccino')}
            >
              Add To Cart
            </button>
          </div>
        </div>
        
        {/* Product Card: Iced Coffee */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <img
            alt="Iced Coffee"
            className="w-full h-48 object-cover"
            src={IcedCoffee}
          />
          <div className="p-6 text-center">
            <h3 className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-1">Coffee</h3>
            <h2 className="text-gray-900 text-2xl font-bold mb-2">Iced Coffee</h2>
            <p className="text-gray-600 text-base mb-4">Cool, refreshing, and energizing.</p>
            <p className="text-blue-600 text-2xl font-extrabold mb-4">${coffeePrices['Iced Coffee']}</p>
            <button
              className="w-full bg-amber-700 text-white font-bold py-3 rounded-lg shadow-md transition-colors duration-200 hover:bg-blue-700"
              onClick={() => addToCart('Iced Coffee')}
            >
              Add To Cart
            </button>
          </div>
        </div>

        {/* Product Card: Black Coffee */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <img
            alt="Black Coffee"
            className="w-full h-48 object-cover"
            src={BlackCoffee}
          />
          <div className="p-6 text-center">
            <h3 className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-1">Coffee</h3>
            <h2 className="text-gray-900 text-2xl font-bold mb-2">Black Coffee</h2>
            <p className="text-gray-600 text-base mb-4">A timeless brew, perfect for purists.</p>
            <p className="text-blue-600 text-2xl font-extrabold mb-4">${coffeePrices['Black Coffee']}</p>
            <button
              className="w-full bg-amber-700 text-white font-bold py-3 rounded-lg shadow-md transition-colors duration-200 hover:bg-blue-700"
              onClick={() => addToCart('Black Coffee')}
            >
              Add To Cart
            </button>
          </div>
        </div>

        {/* Product Card: Espresso */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <img
            alt="Espresso"
            className="w-full h-48 object-cover"
            src={expresso}
          />
          <div className="p-6 text-center">
            <h3 className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-1">Coffee</h3>
            <h2 className="text-gray-900 text-2xl font-bold mb-2">Espresso</h2>
            <p className="text-gray-600 text-base mb-4">Intense flavor in every drop.</p>
            <p className="text-blue-600 text-2xl font-extrabold mb-4">${coffeePrices['Espresso']}</p>
            <button
              className="w-full bg-amber-700 text-white font-bold py-3 rounded-lg shadow-md transition-colors duration-200 hover:bg-blue-700"
              onClick={() => addToCart('Espresso')}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Component for the Cart Modal
  const CartModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-lg mx-auto transform transition-all duration-300 scale-100 opacity-100">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-3xl font-bold text-gray-900">Shopping Cart</h2>
          <button onClick={() => setShowCart(false)} className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <ul className="space-y-4 max-h-80 overflow-y-auto pr-2 mb-6">
          {Object.keys(cart).length === 0 ? (
            <p className="text-center text-gray-500 py-4">Your cart is empty.</p>
          ) : (
            Object.entries(cart).map(([key, item]) => (
              <li key={key} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                <span className="font-semibold text-lg text-gray-800">{key}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700">${(item.qty * item.price).toFixed(2)}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      className="text-lg text-red-500 hover:text-red-700 transition-colors"
                      onClick={() => deleteFromCart(key)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus-circle"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
                    </button>
                    <span className="font-medium">{item.qty}</span>
                    <button
                      className="text-lg text-green-500 hover:text-green-700 transition-colors"
                      onClick={() => addToCart(key)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-circle"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
                    </button>
                  </div>
                  <button className="ml-4 text-sm text-red-500 hover:text-red-700 font-medium" onClick={() => deleteFromCart(key, true)}>
                    Remove
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
        <div className="flex justify-between items-center border-t pt-4">
          <span className="font-bold text-xl">Total Price:</span>
          <span className="font-extrabold text-2xl text-green-600">${calculateTotalPrice()}</span>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            className="w-full bg-green-700 text-white font-bold py-3 rounded-lg shadow-md transition-colors duration-200 hover:bg-green-600"
            onClick={() => { setShowCart(false); setShowLocation(true); }}
            disabled={calculateTotalItems() === 0}
          >
            Confirm Order
          </button>
          <button
            className="w-full bg-red-700 text-white font-bold py-3 rounded-lg shadow-md transition-colors duration-200 hover:bg-red-600"
            onClick={() => setShowCart(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  // Component for the Location/Checkout Modal
  const LocationModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-lg mx-auto">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-3xl font-bold text-gray-900">Enter Your Location</h2>
          <button onClick={() => setShowLocation(false)} className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <p className="text-gray-700 mb-4">Total items: <span className="font-bold">{calculateTotalItems()}</span></p>
        <p className="text-gray-700 mb-6">Total amount: <span className="font-bold text-green-600">${calculateTotalPrice()}</span></p>
        
        <form>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
            <input type="text" id="address" name="address" placeholder="123 Coffee St, Brewtown" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="(123) 456-7890" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              type="submit"
              className="w-full bg-green-700 text-white font-bold py-3 rounded-lg shadow-md transition-colors duration-200 hover:bg-green-600"
              onClick={(e) => { e.preventDefault(); console.log('Order submitted!'); setShowLocation(false); setCart({}); }}
            >
              Place Order
            </button>
            <button
              type="button"
              className="w-full bg-gray-500 text-white font-bold py-3 rounded-lg shadow-md transition-colors duration-200 hover:bg-gray-600"
              onClick={() => setShowLocation(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen font-sans antialiased text-gray-800 py-16">
      <header className="p-4 flex justify-between items-center bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-900">Coffee Categories</h1>
        <button
          onClick={() => setShowCart(true)}
          className="relative bg-green-600 text-white rounded-full p-3 font-semibold text-lg transition-transform duration-200 hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          {calculateTotalItems() > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
              {calculateTotalItems()}
            </span>
          )}
        </button>
      </header>

      {/* Main content section with product grid */}
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Our Coffee Varieties</h1>
          <p className="mt-2 text-lg text-gray-600">Explore our range of coffee, crafted to perfection and guaranteed fresh.</p>
        </div>
        <ProductGrid />
      </main>

      {/* Conditional rendering for modals */}
      {showCart && <CartModal />}
      {showLocation && <LocationModal />}
    </div>
  );
}
