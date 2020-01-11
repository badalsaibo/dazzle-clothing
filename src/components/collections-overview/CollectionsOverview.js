import React from 'react';
import { connect } from 'react-redux';
import { selectShopCollectionsForPreview } from '../../redux/shop/shop-selector';

import CollectionPreview from '../collection-preview/CollectionPreview';

import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map( ({ id, ...otherCollectionProps }) => (
        <CollectionPreview 
          key={id}
          {...otherCollectionProps}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    collections: selectShopCollectionsForPreview(state)
  }
}

export default connect(mapStateToProps)(CollectionsOverview);