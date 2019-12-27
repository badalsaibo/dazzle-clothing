import React from 'react';
import './CollectionPreview.scss';

import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = ({ title, items}) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {
          items
          .filter( (item, idx) => idx < 4)
          .map( (item) => (
            <CollectionItem 
              key={item.id}
              price={item.price}
              name={item.name}
              imageUrl={item.imageUrl}
            />
          ))
        }
      </div>
    </div>
  );
}

export default CollectionPreview;