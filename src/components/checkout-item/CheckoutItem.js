import React from 'react';
import { connect } from 'react-redux';

// import './CheckoutItem.scss';

import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart-actions';

import { CheckOutItemContainer, ItemImage, ItemName, QuantityContainer, ItemRemove, ItemPrice } from './CheckoutItem.styled';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {

  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CheckOutItemContainer>
        <ItemImage>
          <img src={imageUrl} alt='item'/>
        </ItemImage>
        <ItemName>{name}</ItemName>
        <QuantityContainer>
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
        </QuantityContainer>
        <ItemPrice>{price}</ItemPrice>
        <ItemRemove onClick={ () => clearItem(cartItem)}>
          &#10005;
        </ItemRemove>
    </CheckOutItemContainer>
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