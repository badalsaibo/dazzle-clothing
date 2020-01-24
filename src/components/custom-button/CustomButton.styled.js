import styled, { css } from 'styled-components';

const baseButtonStyles = css`
  background-color: var(--color-grey-dark-2);
  color: white;
  border: 1px solid currentColor;

  &:hover {
    background-color: white;
    color: var(--color-grey-dark-2);
    border: 1px solid var(--color-grey-dark-2);
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: var(--color-grey-dark-2);
  border: 1px solid white;

  &:hover {
    background-color: var(--color-grey-dark-2);
    color: white;
    border: 1px solid var(--color-grey-dark-2);
  }
`;

const googleSignInStyles = css`
  background-color: hsl(217, 89%, 61%);
  border: 1px solid currentColor;
  color: white;

  &:hover {
    background-color: hsl(217, 89%, 55%);
    color: white;
    border: 1px solid currentColor;
}
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  };

  return props.inverted ? invertedButtonStyles : baseButtonStyles;
};

export const CustomButtonContainer = styled.button`
  line-height: 1;
  letter-spacing: 0.5px;
  padding: 2rem 3.6rem;
  font-size: 1.6rem;
  text-transform: uppercase;
  font-family: var(--font-display);
  font-weight: 600;
  cursor: pointer;

  ${getButtonStyles}
`;

