import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';
import WithSpinner from '../../components/with-spinner/WithSpinner';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollectionsInReducer } from '../../redux/shop/shop-actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.unsubscribeFromSnapshot = null;
  };

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ isLoading: false });
    });

    // collectionRef.onSnapshot((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ isLoading: false });
    // });
  };

  render() {
    const { match } = this.props;
    return (
      <>
        <Route exact 
          path={`${match.path}`} 
          render={(props) => <CollectionsOverviewWithSpinner isLoading={this.state.isLoading} {...props} />} />

        <Route 
          path={`${match.path}/:collectionId`} 
          render={(props) => <CollectionsPageWithSpinner isLoading={this.state.isLoading} {...props} />} />
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