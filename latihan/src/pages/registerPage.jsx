import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import image from '../assets/img/image_loginPage.png';

import Input from '../components/Input';
import Button from '../components/Button';

class registerPage extends Component {
  render() {
    return (
      <>
        <nav className='flex justify-end mx-20 mt-5'>
          <Link to={'/'} className='font-bold p-5'>HOME</Link>
        </nav>
        <section className='container justify-evenly p-5 lg:flex'>
          <div className="w-full px-5 lg:w-1/4 lg:pt-24">
            <h1 className="text-center font-bold text-3xl mb-5">Register</h1>
            <form action="">
              <Input type="name" placeholder="Name" name="Name" />
              <Input type="email" placeholder="Email" name="Email" />
              <Input type="password" placeholder="Password" name="Password"/>
              <Input type="password" placeholder="Confirm your Password" name="Password"/>
              <Button>Register</Button>
              <h1 className='text-center text-sm mt-4'>Allready account? <Link to={'/login'} className='text-blue-500'> Login</Link></h1>
            </form>
          </div>
          <div className="w-full px-5 lg:w-fit lg:pt-11">
            <img src={image} alt="" />
          </div>
        </section>
      </>
    );
  }
}

export default registerPage;