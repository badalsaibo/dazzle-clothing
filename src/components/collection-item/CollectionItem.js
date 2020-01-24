import React from 'react';

import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart-actions';

// import CustomButton from '../custom-button/CustomButton';

// import './CollectionItem.scss';

import { 
  CollectionItemContainer, 
  CollectionImage, 
  CollectionFooter, 
  AddButton,
  NameContainer,
  PriceContainer 
} from './CollectionItem.styled';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <CollectionImage
        className='image'
        imageUrl={imageUrl}
      />
      <CollectionFooter>
        <NameContainer className='name'>{name}</NameContainer>
        <PriceContainer className='price'>{price}</PriceContainer>
      </CollectionFooter>
      <AddButton onClick={ () => addItem(item) } inverted>Add to cart</AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item))
  }
}



export default connect(null, mapDispatchToProps)(CollectionItem);