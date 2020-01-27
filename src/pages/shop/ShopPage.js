import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollectionsInReducer } from '../../redux/shop/shop-actions';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.unsubscribeFromSnapshot = null;
  };

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  };

  render() {
    const { match } = this.props;
    return (
      <>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </>
    );
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCollections: (collectionsMap) => dispatch(updateCollectionsInReducer(collectionsMap))
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);