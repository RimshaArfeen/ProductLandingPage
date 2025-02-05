import React from 'react'

const Gallery = () => {
  return (
    <section className="body-font text-gray-600 relative -z-20 top-[210vh] md:top-[80vh] lg:top-[100vh]">
    <div className=" w-full mx-auto pb-14 pt-8">
      <div className="-m-4 flex flex-wrap">
        <div className="w-full p-4 md:w-1/3 lg:w-1/4">
          <img alt="ecommerce" className="mx-auto block h-80 w-5/6 object-cover object-center md:w-full" src="https://images.unsplash.com/photo-1549814343-56bebd9e31fc?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="w-full p-4 md:w-1/3 lg:w-1/4">
          <img alt="ecommerce" className="mx-auto block h-80 w-5/6 object-cover object-center md:w-full" src="https://images.unsplash.com/photo-1708010482775-74cadd271e53?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="w-full p-4 md:w-1/3 lg:w-1/4">
          <img alt="ecommerce" className="mx-auto block h-80 w-5/6 object-cover object-center md:w-full" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8" />
        </div>
        <div className="w-full p-4 md:hidden lg:block lg:w-1/4">
          <img alt="ecommerce" className="mx-auto block h-80 w-5/6 object-cover object-center md:w-full" src="https://images.unsplash.com/photo-1522726336270-3a0053210f06?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
      <div className="w-full mx-auto text-center mt-12 px-6 py-6">
        <h2 className="text-3xl font-bold text-gray-900">Freshness Guarantee</h2>
        <p className="mt-4 text-md md:text-lg text-gray-700 ">
          We roast our coffee daily and seal each bag to ensure you get the freshest coffee possible. Check the roasting date on every package.
        </p>
      </div>
    </div>
  </section>
  
  )
}

export default Gallery
