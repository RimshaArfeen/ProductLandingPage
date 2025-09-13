import React from 'react';
import './Contact.css';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) =>{
    let feedbk = data;
    console.log(feedbk);
    localStorage.setItem('data',JSON.stringify(feedbk))
  } ;

 
  return (
    <section className="text-gray-800 body-font relative h-screen bg-gray-100 py-20 -z-10 ">

      <div className="container px-5 mx-auto flex flex-col lg:flex-row lg:w-3/4">
        <div className="lg:w-1/2 w-full lg:pr-8 pb-12 lg:pb-0 flex flex-col">
          <h3 className='text-gray-900 font-bold text-[3rem] text-left my-6'>Contact Us</h3>
          <p className='text-gray-600 mb-6'>
            We’d love to hear from you! For questions, feedback, or assistance, contact us via email_ or phone. We're here to ensure you have a great experience with our coffee.
          </p>
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-gray-800 text-lg font-semibold mb-2">Address</h2>
            <p className="text-gray-600 mb-4">123 Coffee St, Espresso City, CA 12345</p>
            <h2 className="text-gray-800 text-lg font-semibold mb-2">Email_</h2>
            <a href="mailto:support@coffeeexample.com" className="text-blue-500 hover:underline">support@coffeeexample.com</a>
            <h2 className="text-gray-800 text-lg font-semibold mt-4 mb-2">Phone</h2>
            <p className="text-gray-600">(123) 456-7890</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='lg:w-1/2 w-full'>
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-gray-800 text-xl font-semibold mb-4">We Value Your Feedback</h2>
            <p className="text-gray-600 mb-6">Let us know how we can improve your coffee experience.</p>
            
              <div className="mb-6 flex flex-col">
                <label htmlFor="name" className="text-gray-700 text-sm font-medium">Name</label>
                <input {...register("name")} type="text" className="w-full mt-1 bg-gray-200 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="mb-6 flex flex-col">
                <label htmlFor="email_" className="text-gray-700 text-sm font-medium">Email</label>
                <input {...register("email_")} type="text" className="w-full mt-1 bg-gray-200 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out" />
              </div>

            
            <div className="mb-6">
              <label htmlFor="message" className="text-gray-700 text-sm font-medium">Message</label>
              <textarea id="message" {...register("message")} className="w-full mt-1 bg-gray-200 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-24 text-base outline-none text-gray-700 py-2 px-3 resize-none transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <input type='submit' value='Send Feedback' className="w-full text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-amber-700 rounded text-lg cursor-pointer" />
           
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
