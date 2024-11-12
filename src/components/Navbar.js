import React from 'react';
import SearchInput from './SearchInput';

export default function Navbar({ handleSearch }) {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          <img src={require('../assets/imgs/nagasai.png')} width={200} alt='' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'></ul>
          <SearchInput handleSearch={handleSearch} />
        </div>
      </div>
    </nav>
  );
}
