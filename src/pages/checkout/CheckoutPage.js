import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-checkout-button/StripeCheckoutButton';

// import './CheckoutPage.scss';

import {
  CheckOutPageContainer,
  CheckOutHeader,
  HeaderBlock,
  TotalPriceContainer,
  TotalPriceText,
  TestText
} from './CheckoutPage.styled';

const CheckoutPage = (props) => {

  const { cartItems, total } = props;

  return (
    <CheckOutPageContainer>
      <CheckOutHeader>
          <HeaderBlock>Product</HeaderBlock>
          <HeaderBlock>Description</HeaderBlock>
          <HeaderBlock>Quantity</HeaderBlock>
          <HeaderBlock>Price</HeaderBlock>
          <HeaderBlock>Remove</HeaderBlock>
      </CheckOutHeader>
      {
        cartItems.map( (cartItem) =>
          <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        )
      }
      <TotalPriceContainer>
        <TotalPriceText>Total: </TotalPriceText> ${total}
      </TotalPriceContainer>

      <TestText>
        * Use this following test credit card for payment *
        <br />
        4242 4242 4242 4242 | Exp: 01 / 20 | CVV: 123
      </TestText>

      <StripeCheckoutButton price={total}/>
    </CheckOutPageContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
  }
}

export default connect(mapStateToProps)(CheckoutPage);