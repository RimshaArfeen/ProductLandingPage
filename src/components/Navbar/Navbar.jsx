import React from 'react';
import './Navbar.css';
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <nav className="bg-amber-900 text-white fixed w-full z-20 top-0 start-0 border-b border-amber-700 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and Shop Name */}
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="ml-3 text-2xl font-semibold whitespace-nowrap">Nesta Coffee</span>
        </NavLink>

        {/* Auth Buttons */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
          {isAuthenticated ? (
            <>
              {/* Profile button for authenticated users */}
              <NavLink
                to="/profile"
                className="text-white font-medium rounded-full text-sm p-2 text-center transition-colors duration-200 hover:bg-amber-800"
                aria-label="User Profile"
              >
                <i className="ri-user-3-fill text-xl"></i> {/* Using a more appropriate icon library if available */}
              </NavLink>

              {/* Logout button */}
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="bg-amber-700 text-white font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-200 hover:bg-amber-600"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              {/* Login button for non-authenticated users */}
              <button
                onClick={() => loginWithRedirect()}
                className="bg-amber-700 text-white font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-200 hover:bg-amber-600"
              >
                Log In
              </button>
            </>
          )}

          {/* Mobile menu button */}
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        {/* Main Navigation Links */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <NavLink to="/" className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0" aria-current="page">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cate" className="block py-2 px-3 rounded-sm hover:text-amber-300 md:hover:text-amber-300 md:p-0">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="block py-2 px-3 rounded-sm hover:text-amber-300 md:hover:text-amber-300 md:p-0">Locations</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="block py-2 px-3 rounded-sm hover:text-amber-300 md:hover:text-amber-300 md:p-0">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="block py-2 px-3 rounded-sm hover:text-amber-300 md:hover:text-amber-300 md:p-0">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;