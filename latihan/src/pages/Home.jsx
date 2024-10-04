import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Link
} from 'react-router-dom';

import image from '../assets/img/image_loginPage.png';

export default function Home(){
  return (
    <>
       <nav className='flex justify-end m-5 sm:mx-20 sm:mt-5'>
        <Link to={'/login'} className='font-bold p-5'>LOGIN</Link>
        <Link to={'/register'} className='font-bold p-5'>SIGN IN</Link>
      </nav>
      <section className='container justify-center p-5 lg:flex'>
        <div className="w-full px-5 lg:w-fit lg:pt-64">
          <h1 className='font-bold lg:text-7xl lg:mb-5 text-4xl mb-3 text-blue-500'>SMART GROSIR</h1>
          <h3 className='lg:text-3xl'>PT. SAWARGA DIGITAL INDONESIA</h3>
        </div>
        <div className="w-full px-5 lg:w-fit lg:pt-11">
          <img src={image} alt="" />
        </div>
      </section>
    </>
  )
};