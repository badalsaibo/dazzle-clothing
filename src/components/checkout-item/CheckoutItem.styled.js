import styled from 'styled-components';

export const CheckOutItemContainer = styled.ul`
  list-style: none;
  width: 100%;
  min-height: 10rem;
  border-bottom: 1px solid darkgrey;
  padding: 1.6rem 0;
  font-size: 2rem;

  display: flex;
  align-items: center;
  list-style: none;
`;

export const ItemImage = styled.li`
  width: 23%;
  padding-right: 1.6rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ItemName = styled.li`
  width: 23%;
`;

export const QuantityContainer = styled.li`
  width: 23%;
  display: flex;
  padding-left: 1rem;

  .value {
    margin: 0 1rem;
  }

  .arrow {
    cursor: pointer;
  }
`;

export const ItemPrice = styled.li`
  width: 23%;
  padding-left: 1rem;
`;

export const ItemRemove = styled.li`
  padding-left: 2rem;
  cursor: pointer;
`;