import React from 'react';
import Logo from '../Logo.png';

const Order = ({ cancelOrder, totalItems, totalAmount }) => {
    const deliveryCharges = 20;
const confirmOrder =() => {
  alert(" Your order will be placed within 3 hours.")
}

    return (
        <section className="text-gray-600 body-font h-fit transform scale-90 md:scale-100 lg:scale-100">
            <div className="container mx-auto">
                <div className="w-full  mb-10 mx-auto bg-gray-100 p-8 md:p-10 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center mb-6">
                        <img 
                            alt="Nesta Coffee Logo" 
                            className="object-cover object-center w-24 md:w-32 lg:w-40" 
                            src={Logo} 
                        />
                        <h2 className="title-font text-2xl md:text-4xl font-bold text-gray-900 mt-4 lg:mt-0 lg:ml-6 tracking-tight">
                            Nesta Coffee
                        </h2>
                    </div>
                    <div>
                        <h3 className="my-2 text-lg text-gray-800 font-medium">Your Order:</h3>
                        <p className="my-3 text-gray-700 leading-relaxed">
                            Total Items: {totalItems}
                        </p>
                        <div className="flex items-center justify-between my-2">
                            <h3 className="text-lg text-gray-800 font-medium">Total Amount:</h3>
                            <span className="ml-2 text-lg text-gray-900 font-semibold">${totalAmount}</span>
                        </div>
                        <div className="flex items-center justify-between my-2">
                            <h3 className="text-lg text-gray-800 font-medium">Delivery Charges:</h3>
                            <span className="ml-2 text-lg font-light text-gray-700">${deliveryCharges}</span>
                        </div>
                        
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between mt-6">
                        <button className="w-full md:w-[44%] text-center text-lg text-white bg-green-800 border-0 py-3 px-6 mb-4 md:mb-0 hover:bg-green-600 rounded-lg transition duration-200 ease-in-out"
                        onClick={() => { cancelOrder(); confirmOrder(); backto }}>
                            Confirm Order
                        </button>
                        <button className="w-full md:w-[44%] text-center text-lg text-white bg-red-800 border-0 py-3 px-6 hover:bg-red-600 rounded-lg transition duration-200 ease-in-out" onClick={cancelOrder}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Order;
