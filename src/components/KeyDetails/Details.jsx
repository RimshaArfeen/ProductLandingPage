import React, { useState } from 'react';
import './Details.css'; // Assuming this contains custom styles for a coffee shop
import Img from './11246933.png';
import Login from '../Login/LogIn.jsx';
import { NavLink } from 'react-router-dom';

const Details = () => {
  const [showLogin, setShowLogin] = useState(false);
  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
    <div className="bg-gray-50 min-h-screen font-sans antialiased text-gray-800 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto w-full text-center py-16 mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold  leading-tight mb-4 drop-shadow-lg">
          Our Story
        </h1>
        <p className="max-w-xl mx-auto text-lg sm:text-xl  font-light px-4">
          Crafting moments, one cup at a time. Discover the journey behind our passion for perfect coffee.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto w-full space-y-24">

        {/* The Mission Section */}
        <section className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our mission is simple: to provide an exceptional coffee experience. We meticulously source the finest beans from sustainable farms around the globe, ensuring every cup you drink is not only delicious but also ethically produced. We believe in the power of a great cup of coffee to bring people together, spark conversations, and create lasting memories.
            </p>
            <div className="flex items-center space-x-2 text-blue-600 font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.5 2 6.4a7 7 0 0 1-9 7.7a7 7 0 0 1-7-7.7c0-1.9 1-4.4 2-6.4c2 2.48 3.5 3 9.2 4.1A7 7 0 0 1 11 20z"/></svg>
              <span>Ethically Sourced</span>
            </div>
          </div>
          <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-2xl transition-transform transform hover:scale-105">
            <img 
              className="w-full h-80 object-cover" 
              src="https://plus.unsplash.com/premium_photo-1674407009848-4da7a12b6b25?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="A person holding a cup of coffee"
            />
          </div>
        </section>

        {/* Our Craft Section */}
        <section className="flex flex-col md:flex-row-reverse items-center justify-between  pl-5">
          <div className="md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Our Craft</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Craftsmanship is at the heart of what we do. From the precise roasting of our beans to the art of brewing, our baristas are true artists dedicated to their craft. They are trained to bring out the unique flavors and aromas of each bean, ensuring a consistently high-quality brew every time. We believe in innovation while honoring tradition, constantly exploring new techniques to perfect our coffee.
            </p>
            <div className="flex items-center space-x-2 text-blue-600 font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mug-hot"><path d="M4 11a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"/><path d="M17 15h.01"/><path d="M19 15h.01"/><path d="M21 15h.01"/><path d="M6 15v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4"/><path d="M16 13c2.7-.7 4-2.5 4-5a6 6 0 0 0-12 0c0 2.5 1.3 4.3 4 5z"/></svg>
              <span>Handcrafted with Care</span>
            </div>
          </div>
          <div className="md:w-[48%] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              className="w-full h-80 object-cover" 
              src="https://images.unsplash.com/photo-1583555821373-16f43aae6b41?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="A barista preparing a coffee with care"
            />
          </div>
        </section>

        
      </div>
    </div>
    
    <section className="bg-white py-10">
      {/* Login Modal/Sidebar */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Login toggleLogin={toggleLogin} />
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Why Choose Our Coffee?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Discover the difference in every cup. We are committed to quality, sustainability, and an exceptional coffee experience.
          </p>

          <div className="space-y-8">
            {/* Premium Quality */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center">
                {/* Placeholder for an icon like a coffee bean */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM10 0a10 10 0 110 20 10 10 0 010-20zM9 13a1 1 0 112 0 1 1 0 01-2 0zm-2-2a1 1 0 010-2h4a1 1 0 010 2H7zm-2-2a1 1 0 010-2h8a1 1 0 010 2H5z"/>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">Premium Quality:</h3>
                <p className="mt-1 text-base text-gray-600">
                  Our beans are hand-picked from the finest coffee-growing regions, ensuring a superior taste experience in every cup.
                </p>
              </div>
            </div>

            {/* Ethical Sourcing */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center">
                {/* Placeholder for an icon like a handshake */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zM2 10a8 8 10 0116 0A8 8 0 012 10zM10 5a5 5 0 110 10 5 5 0 010-10zM10 7a3 3 0 100 6 3 3 0 000-6z"/>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">Ethical Sourcing:</h3>
                <p className="mt-1 text-base text-gray-600">
                  We maintain direct trade relationships with farmers, promoting sustainable practices and fair compensation.
                </p>
              </div>
            </div>

            {/* Freshness Guaranteed */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center">
                {/* Placeholder for an icon like a clock */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM10 0a10 10 0 110 20 10 10 0 010-20zM9 10a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z"/>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">Freshness Guaranteed:</h3>
                <p className="mt-1 text-base text-gray-600">
                  Our beans are roasted to order and shipped promptly, ensuring you receive the freshest coffee possible.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <img
            className="w-full h-auto object-cover object-center rounded-lg shadow-lg"
            src={Img}
            alt="Freshly roasted coffee beans and a cup of coffee"
          />
        </div>
      </div>
    </section>
    {/* Call to Action Section */}
        <section className="text-center py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Visit Our Coffee Shop
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Come and experience the difference for yourself. We'd love to share our passion for coffee with you.
          </p>
          <NavLink
          to="/contact" className="bg-amber-700 hover:bg-blue-800 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105">
            Get Directions
          </NavLink>
        </section>

    </>
  );
};

export default Details;