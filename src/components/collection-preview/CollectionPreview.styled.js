import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6.104rem;

  @media only screen and (max-width: 44em) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-family: var(--font-display);
  text-transform: uppercase;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: var(--color-grey-dark-2);
  text-align: center;
`;

export const Preview = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 44em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.6rem;
  }
`