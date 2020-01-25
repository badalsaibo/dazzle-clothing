import styled, { css } from 'styled-components';

const ShrinkLabelStyles = css`
  top: -2.4rem;
  opacity: 1;
`;

export const InputGroup = styled.div`
  position: relative;
  margin: 6.1rem 0;
`;

export const StyledInput = styled.input`
  background: none;
  color: var(--color-grey-dark-1);
  font-family: inherit;
  font-size: 1.6rem;
  padding: 1rem;
  padding-left: 0.05rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid var(--color-grey-light);
  transition: all 0.3s;

  &::-webkit-input-placeholder {
    color: var(--color-grey-light);
    transition: all 0.3s;
  }

  &:focus {
    outline: none;

    &::-webkit-input-placeholder {
      opacity: 0;
    }
  }

  &:focus ~ label {
    ${ShrinkLabelStyles};
  }

  &:valid {
    border-bottom: 2px solid hsl(125, 49%, 63%);
  }
`;

export const StyledInputLabel = styled.label`
  color: var(--color-grey-dark-2);
  font-size: 1.6rem;
  position: absolute;
  left: 0;
  pointer-events: none;
  top: 10px;
  opacity: 0;
  text-transform: uppercase;
  transition: all 0.3s;

  &.shrink {
    ${ShrinkLabelStyles};
  }
`