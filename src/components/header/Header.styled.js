import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  position: relative;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 7rem;
  padding: 2.5rem;

  @media only screen and (max-width: 44em) {
    padding: 1rem;
  }
`;

export const OptionsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
`;

export const OptionLink = styled(Link)`
  padding: 2.5rem;
  font-family: inherit;
  font-size: 1.6rem;
  text-transform: uppercase;
  cursor: pointer;
  
  &:link,
  &:visited {
    text-decoration: none;
    color: var(--color-grey-dark-2);
  }

  @media only screen and (max-width: 44em) {
    padding: 1rem;
  }
`;

export const NavContainer = styled.nav`
  width: 50%;

  @media only screen and (max-width: 44em) {
    width: 80%;
  }
`;