import ShopActionTypes from './shop-types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

// export const updateCollectionsInReducer = (collectionsMap) => {
//   return {
//     type: ShopActionTypes.UPDATE_COLLECTIONS,
//     payload: collectionsMap
//   };
// };

export const fetchCollectionsStart = () => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionsSuccess = (collectionsMap) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
  };
};

export const fetchCollectionsFailure = (errorMessage) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
  };
};

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections'); // get the firestore collection reference
    dispatch(fetchCollectionsStart());

    collectionRef.get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)))
  };
};