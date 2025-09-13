import React from 'react';

const Customers = () => {
  return (
    // The section is now a standard block element, removing the odd positioning
    // to ensure it flows naturally within your webpage layout.
    <section className="bg-white py-16 sm:py-24">
      {/* Container with max-w and consistent horizontal padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title for better context */}
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold title-font mb-4 text-gray-900">
            What Our Customers Say
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
            Discover why people love our coffee. Read testimonials from our community.
          </p>
        </div>
        
        {/* Testimonials Grid with consistent padding and card styles */}
        <div className="flex flex-wrap -m-4">
          
          {/* Testimonial Card 1 */}
          <div className="w-full p-4 md:w-1/3">
            <div className="h-full flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-md p-8">
              <img
                alt="customer"
                className="flex-shrink-0 rounded-full w-24 h-24 object-cover object-center mb-4"
                src="https://images.unsplash.com/photo-1597320962500-1f4be91a95d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="w-full">
                <h2 className="title-font font-semibold text-xl text-gray-900">Alper Kamu</h2>
                <p className="mt-2 mb-4 italic text-gray-700">"Their iced caramel coffee is perfect for hot days."</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial Card 2 */}
          <div className="w-full p-4 md:w-1/3">
            <div className="h-full flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-md p-8">
              <img
                alt="customer"
                className="flex-shrink-0 rounded-full w-24 h-24 object-cover object-center mb-4"
                src="https://images.unsplash.com/photo-1516839212682-6c4673935dfa?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="w-full">
                <h2 className="title-font font-semibold text-xl text-gray-900">Holden Caulfield</h2>
                <p className="mt-2 mb-4 italic text-gray-700">"The best coffee I've ever tasted! Highly recommend."</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial Card 3 */}
          <div className="w-full p-4 md:w-1/3">
            <div className="h-full flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-md p-8">
              <img
                alt="customer"
                className="flex-shrink-0 rounded-full w-24 h-24 object-cover object-center mb-4"
                src="https://images.unsplash.com/photo-1506962522065-cf1bed0da013?q=80&w=1433&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="w-full">
                <h2 className="title-font font-semibold text-xl text-gray-900">Atticus Finch</h2>
                <p className="mt-2 mb-4 italic text-gray-700">"I love their cappuccino! It's my go-to coffee every morning."</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Customers;
