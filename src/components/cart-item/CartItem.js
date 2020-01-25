import React from 'react';
// import './CartItem.scss';
import { CartItemContainer, ItemDetailsContainer, ItemName, ItemPrice} from './CartItem.styled';

const CartItem = (props) => {
  const { imageUrl, price, name, quantity } = props.item;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`}/>
      <ItemDetailsContainer>
        <ItemName>{name}</ItemName>
        <ItemPrice>{quantity} x ${price}</ItemPrice>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;