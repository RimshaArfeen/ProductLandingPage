import React from 'react';

const Gallery = () => {
  return (
    // The section is now a standard block element, removing the odd positioning
    // to ensure it flows naturally within your webpage layout.
    <section className="bg-gray-50 py-16 sm:py-24">
      {/* Container with max-width and consistent horizontal padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title and Subtitle for better context */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our Coffee Moments
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            A glimpse into the art and passion behind every cup.
          </p>
        </div>

        {/* Image Grid with improved spacing and visual effects */}
        <div className="flex flex-wrap -m-4">
          
          {/* Image 1: Added hover effect and rounded corners */}
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <div className="rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
              <img alt="Coffee moment" className="block w-full object-cover object-center h-80" src="https://images.unsplash.com/photo-1549814343-56bebd9e31fc?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
          </div>
          
          {/* Image 2 */}
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <div className="rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
              <img alt="Coffee moment" className="block w-full object-cover object-center h-80" src="https://images.unsplash.com/photo-1708010482775-74cadd271e53?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
          </div>
          
          {/* Image 3 */}
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <div className="rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
              <img alt="Coffee moment" className="block w-full object-cover object-center h-80" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8" />
            </div>
          </div>
          
          {/* Image 4: The responsive visibility classes remain unchanged */}
          <div className="w-full p-4 md:w-1/2 lg:block lg:w-1/4 hidden md:block">
            <div className="rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
              <img alt="Coffee moment" className="block w-full object-cover object-center h-80" src="https://images.unsplash.com/photo-1522726336270-3a0053210f06?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
          </div>
        </div>

        {/* Freshness Guarantee section with enhanced padding */}
        <div className="w-full mx-auto text-center mt-16 px-6 py-8">
          <h2 className="text-3xl font-bold text-gray-900">Freshness Guaranteed</h2>
          <p className="mt-4 text-md md:text-lg text-gray-700 max-w-xl mx-auto">
            We roast our coffee daily and seal each bag to ensure you get the freshest coffee possible. Check the roasting date on every package.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
