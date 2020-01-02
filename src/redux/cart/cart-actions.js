import CartActionTypes from './cart-types';

const cartAction = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };
}

export default cartAction;