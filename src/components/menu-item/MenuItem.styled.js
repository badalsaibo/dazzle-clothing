import styled from 'styled-components';

export const MenutItemContainer = styled.div`
  min-width: 30%;
  height: ${(props) => props.size ? '36.380rem' : '27.338rem'};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid hsl(220, 3%, 60%);
  margin: 0 7.5px 15px;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    & .background-image {
      transform: scale(1.2);
    }

    & .content {
      background-color: hsla(0, 0%, 100%, 0.9);
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transition: all 6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background-image: ${(props) => `url(${props.imageUrl})`}
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid hsl(220, 3%, 60%);
  text-transform: uppercase;
  background-color: hsla(0, 0%, 100%, 0.8);
  position: absolute;
  transition: all 0.2s;
`;

export const ContentTitle = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: var(--color-grey-dark-2);
`;

export const ContentSubTitle = styled.span`
  font-weight: 400;
  font-size: 1.28rem;
  color:var(--color-grey-dark-1);
`;