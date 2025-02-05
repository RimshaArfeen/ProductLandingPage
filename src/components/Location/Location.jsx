import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import './Location.css'
import Order from '../YourOrder/Order'

const Location = ({totalItems,totalAmount}) => {
    const [yourLoc, setYourLoc] = useState('Karachi')
    const [yourOrder, setYourOrder] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        setYourLoc(data.location);
        console.log('Location:', data.location); // Correctly log the location
        setYourOrder(true);
    }


    const cancelOrder = () => {
        setYourOrder(false);
    }
 
    return (
        <section className="loc_section text-gray-600 body-font relative lg:top-[70vh] bg-gray-100 rounded-xl w-[90%] lg:w-3/4 xl:w-3/4 mx-auto">
            <div className="container px-5 py-14 mx-auto flex sm:flex-nowrap flex-wrap w-full">
                <div className="w-full md:w-2/3 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        title="map"
                        marginheight="0"
                        marginwidth="0"
                        src={`https://maps.google.com/maps?width=100%&height=600&hl=en&q=${yourLoc}&ie=UTF8&t=&z=14&iwloc=B&output=embed`}
                        style={{ filter: "contrast(1) opacity(1)" }}>
                    </iframe>
                </div>
                <div className="w-full md:w-2/5 bg-white flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0 p-3 rounded-lg">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Enter Your Location</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="relative mb-4">
                            <label htmlFor="location" className="leading-7 text-sm text-gray-600">Location</label>
                            <input
                                {...register("location", { required: true })}
                                type="text"
                                className="w-full bg-white rounded border focus:ring-2 focus:ring-gray-200 text-sm outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            {errors.location && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                className="w-full bg-white rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        >
                            Continue
                        </button>
                       
                    </form>
                    

                </div>
                
                {yourOrder && (
                    <div className=" inset-0 flex items-center justify-center bg-black bg-opacity-50 absolute z-10">
                        <div className="rounded-lg shadow-lg h-fit">
                            <Order cancelOrder={cancelOrder} totalAmount={totalAmount} totalItems={totalItems} />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Location
