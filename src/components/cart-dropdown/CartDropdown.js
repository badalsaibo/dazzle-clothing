import React from 'react';

import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton';

import { selectCartItems } from '../../redux/cart/cart-selectors';

import { connect } from 'react-redux';

import './CartDropdown.scss';

const CartDropdown = (props) => {

  const { cartItems } = props;

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.map( (cartItem) => {
            return (
              <CartItem key={cartItem.id} item={cartItem}/>
            )
          })
        }
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  }
}

export default connect(mapStateToProps)(CartDropdown);