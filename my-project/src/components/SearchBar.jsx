'use client';

import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { cities } from '../cityData';

const SearchBar = ({ setSearch }) => {
  const [autofillList, setAutofillList] = useState([]);
  const [currSearch, setcurrSearch] = useState('');

  const handleSearch = (e) => {
    setcurrSearch(e.target.value);
    if (e.target.value === '') {
      setAutofillList([]);
      return;
    }

    setAutofillList(
      // @ts-ignore
      cities
        .filter((c) => c.toLowerCase().includes(e.target.value.toLowerCase()))
        .slice(0, 8)
    );
  };

  return (
    <form className='w-[500px] h-20 relative p-6'>
      <div className='relative'>
        <input
          type='search'
          placeholder='Search for a City'
          className='w-full p-4 rounded-full bg-[#d8bfd87e] drop-shadow-md'
          onChange={(e) => handleSearch(e)}
          onKeyDown={(e) => {
            if (e.key == 'ENTER') {
              setSearch(currSearch);
            }
          }}
          value={currSearch}
        />
        <button
          className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-[#D8BFD8] rounded-full'
          onClick={() => {
            setSearch(currSearch);
          }}
        >
          <IoMdSearch />
        </button>
      </div>

      {autofillList.length > 0 && (
        <div className='w-[500px] absolute top-20 p-4 ml-6 mt-4 z-50 bg-[#ECE0EC] drop-shadow-md text-black rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2'>
          {autofillList.map((s) => (
            <p
              onClick={() => {
                setcurrSearch(s);
                setAutofillList([]);
                setSearch(s);
              }}
            >
              {s}
            </p>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
