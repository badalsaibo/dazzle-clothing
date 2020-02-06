import styled from 'styled-components';
import CustomButton from '../custom-button/CustomButton';

export const CollectionItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 36.38rem;
  align-items: center;
  position: relative;
  padding: 1rem;

  &:hover {
    .image {
      opacity: 0.9;
    }

    button {
      display: flex;
    }
  }

  @media only screen and (max-width: 44em) {
    width: 40vw;
    padding: 0;
    margin-bottom: 2rem;

    &:hover {
      .image {
        opacity: unset;
      }
  
      button {
        display: unset;
      }
    }
  }
`;

export const CollectionImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 1rem;
  background-image: ${ (props) => `url(${props.imageUrl})`};
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  color: var(--color-grey-dark-2);
  font-family: var(--font-display);
  font-weight: 600;
  text-transform: uppercase;
`;

export const NameContainer = styled.span`
    width: 90%;
`;

export const PriceContainer = styled.span`
    width: 10%;
`;

export const AddButton = styled(CustomButton)`
  position: absolute;
  top: 70%;
  opacity: 0.8;
  display: none;

  @media only screen and (max-width: 44em),
  (hover: none) {
    display: block;
    opacity: 0.9;
    padding: 1.6rem 2.0rem;
    font-size: 1.4rem;
  }
`