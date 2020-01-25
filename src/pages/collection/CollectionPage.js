import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop-selector';

import CollectionItem from '../../components/collection-item/CollectionItem';

import { CollectionPageContainer, CollectionTitle, CollectionItems } from './CollectionPage.styled';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItems>
        {items.map((item) => 
          <CollectionItem key={item.id} item={item}/>
        )}
      </CollectionItems>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state) // Don't forget to pass the original state
  };
};

export default connect(mapStateToProps)(CollectionPage);