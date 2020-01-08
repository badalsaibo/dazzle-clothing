import React from 'react';

import './CheckoutItem.scss';

const CheckoutItem = (props) => {

  const { imageUrl, price, name, quantity } = props.cartItem;

  return (
    <div className='checkout-item'>
      <ul>
        <li className='image-container'>
          <img src={imageUrl} alt='item'/>
        </li>
        <li className='name'>{name}</li>
        <li className='quantity'>{quantity}</li>
        <li className='price'>{price}</li>
        <li className='remove-button'>&#10005;</li>
      </ul>
    </div>
  );
}


export default CheckoutItem;