import React, { Component } from 'react';

class Input extends Component {
  render(type, placeholder, name) {
    return (
      <input type={type} placeholder={placeholder} name={name} className='w-full my-3 p-3 border-b-2 border-gray-300 bg-slate-100 border-0'/>
    );
  }
}

export default Input;