import React from 'react';
import { connect } from 'react-redux';

import './CheckoutItem.scss';

import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart-actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {

  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className='checkout-item'>
      <ul>
        <li className='image-container'>
          <img src={imageUrl} alt='item'/>
        </li>
        <li className='name'>{name}</li>
        <li className='quantity'>
          <div 
            className='arrow'
            onClick={() => removeItem(cartItem)}
          >
              &#10094;
          </div>
            <span className='value'>{quantity}</span>
          <div 
            className='arrow'
            onClick={() => addItem(cartItem)}
          >
            &#10095;
          </div>
        </li>
        <li className='price'>{price}</li>
        <li 
          className='remove-button'
          onClick={ () => clearItem(cartItem)}
        >
          &#10005;
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
  }
};


export default connect(null, mapDispatchToProps)(CheckoutItem);