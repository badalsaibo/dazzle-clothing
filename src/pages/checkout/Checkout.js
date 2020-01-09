import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';

import './Checkout.scss';

const Checkout = (props) => {

  const { cartItems, total } = props;

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <ul>
          <li className='header-block'>Product</li>
          <li className='header-block'>Description</li>
          <li className='header-block'>Quantity</li>
          <li className='header-block'>Price</li>
          <li className='header-block'>Remove</li>
        </ul>
      </div>
      {
        cartItems.map( (cartItem) =>
          <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        )
      }
      <div className='total'>
        <span className='total-text'>Total: </span> ${total}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
  }
}

export default connect(mapStateToProps)(Checkout);