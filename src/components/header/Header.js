import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
// Importing SVGs in React
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = (props) => {
  const { currentUser } = props;
  return (
    <div className='header'>
      <Link to='/'className='logo-container'>
        <Logo className='logo' />
      </Link>
    
      <nav className='nav'>
        <ul className='options'>
          <li><Link className='option' to='/shop'>Shop</Link></li>
          <li><Link className='option' to='/contact'>Contact</Link></li>
          {
            currentUser ?
            <li><div className='option' onClick={() => auth.signOut()}>Sign Out</div></li>
            :
            <li><Link className='option' to='/signin'>Sign In</Link></li>
          }
        </ul>
      </nav>
    </div>
  );
}

export default Header;