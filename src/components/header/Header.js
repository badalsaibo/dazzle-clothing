import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

// Importing SVGs in React
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'className='logo-container'>
        <Logo className='logo' />
      </Link>
    
      <nav className='nav'>
        <ul className='options'>
          <li><Link className='option' to='/shop'>Shop</Link></li>
          <li><Link className='option' to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;