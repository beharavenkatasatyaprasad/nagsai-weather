import React, { useState } from 'react';

export default function SearchInput({ handleSearch }) {
  const [city, setCity] = useState('');

  return (
    <div className='d-flex'>
      <input
        className='form-control me-2'
        onChange={(e) => setCity(e.target.value)}
        type='search'
        placeholder='Search'
        aria-label='Search'
      />
      <button
        onClick={() => {
          handleSearch(city);
        }}
        className='btn btn-outline-success'
      >
        Search
      </button>
    </div>
  );
}
