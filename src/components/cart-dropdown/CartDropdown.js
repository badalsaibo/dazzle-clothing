import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CartItem from '../cart-item/CartItem';

import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

// import './CartDropdown.scss';

import { CartDropdownContainer, CartItemsContainer, EmptyMessage, CartDropdownButton } from './CartDropdown.styled';

const CartDropdown = (props) => {

  const { cartItems, history, dispatch } = props; // provided by redux

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {
          cartItems.length
          ? cartItems.map( (cartItem) => {
          return (
            <CartItem key={cartItem.id} item={cartItem}/>
          )
        })
          : <EmptyMessage>Your cart is empty</EmptyMessage>
        }
      </CartItemsContainer>
      <CartDropdownButton 
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        Go to checkout
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  }
}

export default withRouter(connect(mapStateToProps)(CartDropdown));