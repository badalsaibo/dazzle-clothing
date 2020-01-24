import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';


// Importing SVGs in React
import { ReactComponent as Logo } from '../../assets/crown.svg';


import { HeaderContainer, LogoContainer, NavContainer, OptionsContainer, OptionLink } from './Header.styled';

const Header = (props) => {
  const { currentUser, hidden } = props;
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
    
      <NavContainer>
        <OptionsContainer>
          <li><OptionLink to='/shop'>Shop</OptionLink></li>
          <li><OptionLink to='/contact'>Contact</OptionLink></li>
          {
            currentUser ?
            <li><OptionLink as='div' onClick={() => auth.signOut()}>Sign Out</OptionLink></li>
            :
            <li><OptionLink to='/signin'>Sign In</OptionLink></li>
          }
          <li><CartIcon /></li>
        </OptionsContainer>
      </NavContainer>
      { 
        hidden ? null : <CartDropdown />
      }
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
  };
}


export default connect(mapStateToProps)(Header);