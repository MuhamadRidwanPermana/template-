import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import image from '../assets/img/image_loginPage.png';

import Input from '../components/Input';
import Button from '../components/Button';

class Login extends Component {
  render() {
    return (
      <>
        <nav className='flex justify-end mx-5 lg:mx-20 lg:mt-5'>
          <Link to={'/'} className='font-bold p-5'>HOME</Link>
        </nav>
        <section className='container justify-evenly p-5 lg:flex'>
          <div className="w-full px-5 lg:w-1/4 lg:pt-36">
            <h1 className="text-center font-bold text-3xl mb-5">Login</h1>
            <form action="">
              <Input type="email" placeholder="Email" name="Email" />
              <Input type="password" placeholder="Password" name="Password"/>
              <Link to={'/dashboard'}>
                <Button>Login</Button>
              </Link>
            </form>
            <h1 className='text-center text-sm mt-4'>You don't have an account? <Link to={'/register'} className='text-blue-500'>Register</Link></h1>
          </div>
          <div className="w-full px-5 lg:w-fit lg:pt-11">
            <img src={image} alt="" />
          </div>
        </section>
      </>
    );
  }
}

export default Login;