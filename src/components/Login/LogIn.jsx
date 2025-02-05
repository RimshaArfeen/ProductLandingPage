import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Logo from '../Logo.png'

const Login = ({ShowLogin}) => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
        <section className="text-gray-600 body-font">
          <div className="w-full mx-auto flex flex-row items-center">
            <div className="w-1/2 md:mb-0">
              <img
                className="object-cover object-center h-[25rem] w-[20rem] lg:w-[35rem]"
                alt="hero"
                src="https://images.unsplash.com/photo-1511426420268-4cfdd3763b77?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="w-1/2 mx-auto pl-3 flex flex-col text-left lg:ml-14">
            <div className="flex justify-end w-full -mt10">

                <span className="p-1 px-3 bg-red-700 mr-0 mb-2 w-10" onClick={ShowLogin}>
                  <i className="ri-close-large-line text-white"></i>
                </span>
              </div>
             
                <h1 className="title-font text-xl lg:text-2xl font-semibold text-gray-900">Nesta Coffee</h1>
              <h1 className="title-font text-xl lg:text-2xl my-2 font-medium text-gray-800">Create New Account</h1>
              <p className="mb-6 text-sm lg:text-lg">
                Join our community to unlock exclusive features and personalized content. Create an account or log in to continue your seamless experience.
              </p>
              <div className="w-full">
                {isAuthenticated && (
                  <div>
                  <button
                  className=" w-full mx-auto text-sm text-white bg-amber-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  onClick={() => loginWithRedirect()}
                >
                  Sign Up
                </button>
                  <p className="my-1 text-center w-5/6 text-sm lg:text-lg">Already have an account?</p>
                  <button
                    className=" w-full mx-auto text-sm text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded"
                    onClick={() => loginWithRedirect()}
                  >
                    Log In
                  </button>


                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      );
    };
    

{/* //     <section>
//       <section class="text-gray-600 body-font">
//   <div class="container px-5 py-10 mx-auto">
//     <div class="flex flex-wrap -m-4">
//       <div class="w-full">
//       <h3 class="title-font mb-4 text-2xl font-medium text-gray-900">Login to our website</h3>
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-auto h-[14rem] block" src={Logo}/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
//           <p class="mt-1">$16.00</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//             {/* {isAuthenticated && (
//       <div>
//         <p className="md:mr-0  mr-5 hover:text-gray-900">{user.name}</p>
//       </div>
//     )}
//           {isAuthenticated ? (

//             <li className="md:mr-0  mr-5 hover:text-gray-900 list-none"> <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
//             Log Out
//           </button>
//           </li>

//           ):(
//             <li className="md:mr-0  mr-5 hover:text-gray-900 list-none"> <button onClick={() => loginWithRedirect()}>Log In</button></li>
//           )} */}



  export default Login;
