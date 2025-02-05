import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Cate from './components/Categories/Cate';
import Details from './components/KeyDetails/Details';
import Gallery from './components/Gallery/Gallery';
import Customers from './components/Customer/Customers';
import Contact from './components/Contact/Contact';
import Profile from './components/UserProfile/Profile';
import Footer from './components/Footer/Footer';
function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /> <Main /><Details /><Cate /><Gallery /><Customers /><Contact /><Footer /></>,
    },
    {
      path: "/about",
      element: <><Navbar /><Details /><Footer /></>,
    },
    {
      path: "/cate",
      element: <><Navbar /><Cate /><Footer /></>,
    },
    {
      path: "/gallery",
      element: <><Navbar /><Gallery /></>,
    },
    {
      path: "/blog",
      element: <><Navbar /><Customers /><Footer /></>,
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /><Footer /></>,
    },
    {
      path: "/profile",
      element: <><Navbar /><Profile /><Footer /></>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
