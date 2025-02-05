import React, { useState, useEffect } from 'react';
import Order from '../YourOrder/Order';
import './Cate.css';
import Location from '../Location/Location';
const Cate = () => {
  const coffeePrices = {
    'Black Coffee': 10,
    'Iced Coffee': 17,
    'Cappuccino': 10,
    'Espresso': 8.5,
  };

  const [Cart, setCart] = useState({});
  const [Black, setBlack] = useState(0);
  const [Iced, setIced] = useState(0);
  const [Cappuccino, setCappuccino] = useState(0);
  const [Espresso, setEspresso] = useState(0);
  const [loc, setLoc] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    // Update localStorage whenever Cart state changes
    localStorage.setItem('Cart', JSON.stringify(Cart));
  }, [Cart]);

  const deleteFromCart = (type, all = false) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (all) {
        delete newCart[type];
      } else {
        newCart[type].qty -= 1;
        if (newCart[type].qty <= 0) {
          delete newCart[type];
        }
      }
      return newCart;
    });

    switch (type) {
      case 'Black Coffee':
        setBlack(all ? 0 : Black - 1);
        break;
      case 'Iced Coffee':
        setIced(all ? 0 : Iced - 1);
        break;
      case 'Cappuccino':
        setCappuccino(all ? 0 : Cappuccino - 1);
        break;
      case 'Espresso':
        setEspresso(all ? 0 : Espresso - 1);
        break;
      default:
        break;
    }
  };

  const addToCart = (type) => {
    setCart((prevCart) => ({
      ...prevCart,
      [type]: {
        qty: (prevCart[type]?.qty || 0) + 1,
        price: coffeePrices[type],
      },
    }));

    switch (type) {
      case 'Black Coffee':
        setBlack(Black + 1);
        break;
      case 'Iced Coffee':
        setIced(Iced + 1);
        break;
      case 'Cappuccino':
        setCappuccino(Cappuccino + 1);
        break;
      case 'Espresso':
        setEspresso(Espresso + 1);
        break;
      default:
        break;
    }
  };

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const showLoc = () => {
    console.log("Enter location plzz");
    setLoc(true);
  };

  const handleCloseLocation = () => {
    setLoc(false);
  };

  const calculateTotalPrice = () => {
    return Object.values(Cart).reduce((total, item) => total + item.qty * item.price, 0).toFixed(2);
  };
  const calculateTotalItems = () => {
    return Object.values(Cart).reduce((total, item) => total + item.qty, 0);
  };

  return (
    <section className={`body-font mx-auto h-screen relative px-5 py-20 pb-4 text-gray-600 mb-36`}>
      <div className={`w-full mx-auto px-5 py-24 ${showCart ? 'opacity-50' : ''}`}>
        <div className="w-full mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold">Our Coffee Varieties</h1>
          <p className="text-lg text-gray-700 mt-4">Explore our range of coffee, crafted to perfection and guaranteed fresh.</p>
        </div>
        <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* Cappuccino */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-5/6 mx-auto">
            <a className="block relative h-60 lg:72 rounded overflow-hidden">
              <img
                alt="Cappuccino"
                className="object-cover object-center w-full h-full block"
                src="https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Coffee</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Cappuccino</h2>
              <p>Creamy and frothy, a delightful treat.</p>
              <p className="price mt-1 text-lg font-semibold">${coffeePrices['Cappuccino']}</p>
              <button
                className="rounded-lg bg-blue-600 hover:bg-blue-800 py-2 px-2 text-lg text-white w-full mt-2"
                onClick={() => addToCart('Cappuccino')}
              >
                Add To Cart
              </button>
            </div>
          </div>

          {/* Iced Coffee */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-5/6 mx-auto">
            <a className="block relative h-60 lg:h-[58%] rounded overflow-hidden">
              <img
                alt="Iced Coffee"
                className="object-cover object-center w-full h-full block"
                src="https://img.freepik.com/free-photo/cold-coffee-with-ice-cream_1220-4092.jpg?t=st=1723448259~exp=1723451859~hmac=fa898c7bbd2c85b3958d0d39a73524e2198fb97f3bd8e5b38dcd9afea6b9dceb&w=740"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Coffee</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Iced Coffee</h2>
              <p>Cool, refreshing, and energizing.</p>
              <p className="price mt-1 text-lg font-semibold">${coffeePrices['Iced Coffee']}</p>
              <button
                className="rounded-lg bg-blue-600 hover:bg-blue-800 py-2 px-2 text-lg text-white w-full mt-2"
                onClick={() => addToCart('Iced Coffee')}
              >
                Add To Cart
              </button>
            </div>
          </div>

          {/* Black Coffee */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-5/6 mx-auto">
            <a className="block relative h-60 lg:72 rounded overflow-hidden">
              <img
                alt="Black Coffee"
                className="object-cover object-center w-full h-full block"
                src="https://img.freepik.com/free-photo/beverage-leaf-cloth_23-2147885990.jpg?t=st=1723448553~exp=1723452153~hmac=c52143390e24919f82d922243701fa18ee46f528f0ad1227a7ac9f6bd3c5eb96&w=740"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Coffee</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Black Coffee</h2>
              <p>A timeless brew, perfect for purists.</p>
              <p className="price mt-1 text-lg font-semibold">${coffeePrices['Black Coffee']}</p>
              <button
                className="rounded-lg bg-blue-600 hover:bg-blue-800 py-2 px-2 text-lg text-white w-full mt-2"
                onClick={() => addToCart('Black Coffee')}
              >
                Add To Cart
              </button>
            </div>
          </div>

          {/* Espresso */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-5/6 mx-auto">
            <a className="block relative h-60 lg:72 rounded overflow-hidden">
              <img
                alt="Espresso"
                className="object-cover object-center w-full h-full block"
                src="https://www.lasabbq.com/cdn/shop/products/espresso.jpg?v=1660633495"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Coffee</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Espresso</h2>
              <p>Intense flavor in every every drop.</p>
              <p className="price mt-1 text-lg font-semibold">${coffeePrices['Espresso']}</p>
              <button
                className="rounded-lg bg-blue-600 hover:bg-blue-800 py-2 px-2 text-lg text-white w-full mt-2"
                onClick={() => addToCart('Espresso')}
              > 
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
      <button className="cart bg-green-700 rounded-full text-lg text-white p-3" onClick={handleCartClick}>
        Cart
      </button>
      </div>


      
      <div className={`cart-items lg:top-[100vh] w-full lg:w-5/6 ${showCart ? 'show' : 'disappear'}`}>
        <div className="w-full absolute z-20 top-[170rem]">
          <div className="p-8 relative w-5/6 right-0 bg-white shadow-lg rounded-lg">
            <h2 className="font-bold text-2xl">Shopping Cart</h2>
            <button onClick={handleCartClick} className="absolute top-[10px] right-[15px] text-lg hover:bg-red-700 text-red-700 px-2 py-1 rounded-full hover:text-white font-semibold">
              <i className="ri-close-line text-xl"></i>
            </button>
            <ul className="my-6">
              {Object.keys(Cart).length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                Object.entries(Cart).map(([key, item]) => (
                  <li key={key} className="mb-4 flex justify-between items-center">
                    <span>{key}</span>
                    <span>${(item.qty * item.price).toFixed(2)}</span>
                    <div className="flex items-center">
                      <button
                        className="ml-4 text-xl text-red-500 hover:text-red-700"
                        onClick={() => deleteFromCart(key)}
                      >
                        -
                      </button>
                      <span className="mx-4">{item.qty}</span>
                      <button
                        className="text-xl text-green-500 hover:text-green-700"
                        onClick={() => addToCart(key)}
                      >
                        +
                      </button>
                    </div>
                    <button className="ml-4 text-sm text-red-500 hover:text-red-700" onClick={() => deleteFromCart(key, true)}>
                      Remove
                    </button>
                  </li>
                ))
              )}
            </ul>
            <div className="flex justify-between items-center mt-4">
              <span className="font-medium">Total Price:</span>
              <span className="font-semibold text-xl">${calculateTotalPrice()}</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className="w-2/5 text-center text-lg text-white bg-green-800 border-0 py-3 px-6 hover:bg-green-600 rounded-lg transition duration-200 ease-in-out" onClick={showLoc}>
                Confirm Order
              </button>
              <button className="w-2/5 text-center text-lg text-white bg-red-800 border-0 py-3 px-6 hover:bg-red-600 rounded-lg transition duration-200 ease-in-out" onClick={handleCartClick}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {loc && (
        <div className={`location-section absolute top-0 left-0 w-full h-screen `}>
          {/* <Order cancelOrder={handleCloseLocation} totalItems={calculateTotalItems} totalAmount={calculateTotalPrice()} /> */}
          <Location cancelOrder={handleCloseLocation} totalItems={calculateTotalItems} totalAmount={calculateTotalPrice()} />
          <button
                            type="submit" onClick={handleCloseLocation}
                            className="text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg relative top-[77vh] ml-40"
                        >
                            Cancel
                        </button>
        </div>
      )}
    </section>
  );
};

export default Cate;
