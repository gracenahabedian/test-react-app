'use client';

import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { cities } from '../data';

const SearchBar = (props) => {
  const [activeSearch, setActiveSearch] = useState([]);

  const handleSearch = (e) => {
    if (e.target.value === '') {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      cities.filter((c) => c.includes(e.target.value)).slice(0, 8)
    );
  };

  return (
    <form className='w-[500px] h-20 relative p-6'>
      <div className='relative'>
        <input
          type='search'
          placeholder='Search City'
          className='w-full p-4 rounded-full bg-[#d8bfd87e] drop-shadow-md'
          onChange={(e) => handleSearch(e)}
        />
        <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-[#D8BFD8] rounded-full'>
          <IoMdSearch />
        </button>
      </div>

      {activeSearch.length > 0 && (
        <div className='w-full absolute top-20 p-4 ml-6 mt-4 z-50 bg-[#ECE0EC] drop-shadow-md text-black rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2'>
          {activeSearch.map((s) => (
            <span>{s}</span>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
