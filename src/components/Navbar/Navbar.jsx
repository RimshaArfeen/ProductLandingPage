
import React from 'react';
import './Navbar.css';
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';
import Profile from '../UserProfile/Profile';
const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }



  return (
    <header className="text-gray-100 w-full body-font relative top-0 mx-auto overflow-hidden">
      <div className="container mx-auto flex flex-wrap p-5 py-5 flex-col md:flex-row items-center">
        <nav className="flex w-full lg:w-1/2 flex-wrap justify-around items-center text-lg ">
          <NavLink to="/" className="mr-5 hover:text-gray-700">Home</NavLink>
          <NavLink to="/about" className="mr-5 hover:text-gray-700">About</NavLink>
          <NavLink to="/cate" className="md:mr-5 hover:text-gray-700">Categories</NavLink>
          <NavLink to="/contact" className="md:mr-0  mr-5 hover:text-gray-700">Contact Us</NavLink>
          <NavLink to="/blog" className="md:mr-0  mr-5 ml-5 hover:text-gray-700">Blog</NavLink>
        { isAuthenticated && (
          <div>

            <NavLink to="/profile"  className="md:mr-0 ml-5  mr-5 p-2 hover:bg-gray-200 rounded-full "><i class="ri-user-3-fill text-xl text-gray-700 hover:text-gray-700"></i></NavLink>

          </div>
          )}
          {!isAuthenticated ?(
            <li className="md:mr-0  mr-5 hover:text-gray-700"> <button onClick={() => loginWithRedirect()}>Log In</button></li>
          ):""}
         
        

        </nav>

        <a className="flex order-first lg:order-none lg:w-1/4 title-font font-medium items-center mx-auto lg:items-center lg:justify-center mb-4 md:mb-0">
          <i className="ri-drinks-fill" viewBox="0 0 24 24"></i>
          <span className="ml-3 text-2xl text-white">Nesta Coffee</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
