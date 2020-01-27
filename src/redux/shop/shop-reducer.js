import SHOP_DATA from './shop.data';
import ShopActionTypes from './shop-types';

const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...prevState,
        collections: action.payload
      };
    default:
      return prevState;
  };
};

export default shopReducer;