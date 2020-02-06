import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h1`
  font-family: var(--font-display);
  text-transform: uppercase;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3.6rem;
  color: var(--color-grey-dark-2);
`;

export const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 3rem;
  grid-column-gap: 2rem;

  @media only screen and (max-width: 44em) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0;
    justify-items: center;
  }
`;