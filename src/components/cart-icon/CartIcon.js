import React from 'react';

import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart-actions';

import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

// import './CartIcon.scss';
import { CartIconContainer, ShoppingIcon, CartIconItemCount} from './CartIcon.styled';

const CartIcon = (props) => {

  const { toggleCartHidden, itemCount } = props;

  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <CartIconItemCount>{itemCount}</CartIconItemCount>
    </CartIconContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  };
};

const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemsCount(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);