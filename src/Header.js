import React from 'react';
import './Header.css';

function Header() {
  return (
    <header id="home"> {/* Added id here */}
      <h1>Hi. I'm Raahil Mehta.</h1>
      <p>A Designer & Developer</p>
      <p className='p2'>Actively looking for new opportunities</p>
    </header>
  );
}

export default Header;
