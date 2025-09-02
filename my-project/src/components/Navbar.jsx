import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='h-20 bg-[#D8E6EA] flex gap-4 px-16 items-center'>
      <Link to={'/'}>
        <div className='h-14 w-14 bg-blue-500 rounded-full' />
      </Link>
      <Link to={'/weather'}>
        <p className='text-xl font-medium'>Weather</p>
      </Link>
      <Link to={'/news'}>
        <p className='text-xl font-medium'>News</p>
      </Link>
    </div>
  );
}

export default Navbar;
