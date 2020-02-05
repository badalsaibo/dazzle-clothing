import ShopActionTypes from './shop-types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...prevState,
        isFetching: true
      };

    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...prevState,
        isFetching: false,
        collections: action.payload
      };
      
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...prevState,
        isFetching: false,
        errorMessage: action.payload
      };
    
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