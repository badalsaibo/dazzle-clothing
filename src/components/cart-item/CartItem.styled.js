import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 8.1rem;
  margin-bottom: 2rem;

  img {
    width: 30%;
  }
`;

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 1rem 2rem;
`;

export const ItemName = styled.span`
  color: var(--color-grey-dark-1);
  font-size: 1.28rem;
`;

export const ItemPrice = styled.span`
  color: var(--color-grey-dark-2);
  font-size: 1.6rem;
  letter-spacing: 0.1px;
`;