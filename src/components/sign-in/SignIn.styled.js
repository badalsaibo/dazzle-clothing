import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 30vw;

  @media only screen and (max-width: 44em) {
    width: 100%;
    margin-bottom: 6.1rem;
  }
`;

export const SignInTitle = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  color: var(--color-grey-dark-2);
  margin-bottom: 1.6rem;
`;

export const SignInSubTitle = styled.span`
  font-size: 1.28rem;
  color: var(--color-grey-dark-1)
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
