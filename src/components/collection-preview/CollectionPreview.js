import React from 'react';

import CollectionItem from '../collection-item/CollectionItem';

import { CollectionPreviewContainer, Title, Preview } from './CollectionPreview.styled';

const CollectionPreview = ({ title, items}) => {
  return (
    <CollectionPreviewContainer>
      <Title>{title}</Title>
      <Preview>
        {
          items
          .filter( (item, idx) => idx < 4)
          .map( (item) => (
            <CollectionItem 
              key={item.id}
              item={item}
            />
          ))
        }
      </Preview>
    </CollectionPreviewContainer>
  );
}

export default CollectionPreview;