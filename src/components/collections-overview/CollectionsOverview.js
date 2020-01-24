import React from 'react';
import { connect } from 'react-redux';
import { selectShopCollectionsForPreview } from '../../redux/shop/shop-selector';

import CollectionPreview from '../collection-preview/CollectionPreview';

import { CollectionsOverviewContainer } from './CollectionsOverview.styled';

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map( ({ id, ...otherCollectionProps }) => (
        <CollectionPreview 
          key={id}
          {...otherCollectionProps}
        />
      ))}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    collections: selectShopCollectionsForPreview(state)
  }
}

export default connect(mapStateToProps)(CollectionsOverview);