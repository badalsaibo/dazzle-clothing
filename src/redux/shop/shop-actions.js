import ShopActionTypes from './shop-types';

export const updateCollectionsInReducer = (collectionsMap) => {
  return {
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
  };
};