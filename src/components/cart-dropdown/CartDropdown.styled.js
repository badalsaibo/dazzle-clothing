import styled from 'styled-components';

import CustomButton from '../custom-button/CustomButton';


export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 28rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid var(--color-grey-dark-1);
  background-color: white;
  top: 9rem;
  right: 0;
  z-index: 10;
`;

export const CartItemsContainer = styled.div`
  height: 24rem;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const EmptyMessage = styled.span`
  font-size: 1.6rem;
  margin: auto; 
  color: var(--color-grey-light);
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`