import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton';

import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

import './CartDropdown.scss';

const CartDropdown = (props) => {

  const { cartItems, history, dispatch } = props; // provided by redux

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length
          ? cartItems.map( (cartItem) => {
          return (
            <CartItem key={cartItem.id} item={cartItem}/>
          )
        })
          : <span className='empty-message'>Your cart is empty</span>
        }
      </div>
      <CustomButton 
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        Go to checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  }
}

export default withRouter(connect(mapStateToProps)(CartDropdown));