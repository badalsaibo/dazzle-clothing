import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverviewContainer';
import CollectionPageContainer from '../collection/CollectionPageContainer';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop-actions';

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync(); // this is a dispatch function
  };

  render() {
    const { match } = this.props;
    return (
      <>
        <Route exact 
          path={`${match.path}`} 
          component={CollectionsOverviewContainer} 
        />

        <Route 
          path={`${match.path}/:collectionId`} 
          component={CollectionPageContainer} />
      </>
    );
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);