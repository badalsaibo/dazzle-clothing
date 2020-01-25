import styled from 'styled-components';

export const CheckOutPageContainer = styled.div`
  width: 62%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.8rem auto 0;

  button {
    margin-left: auto;
    margin-top: 6.1rem;
  }
`;

export const CheckOutHeader = styled.ul`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid var(--color-grey-light);
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
  font-family: var(--font-display);
  text-transform: uppercase;

  display: flex;
  justify-content: space-between;
  list-style: none;
`;

export const HeaderBlock = styled.li`
  width: 23%;
  line-height: 1.6;

  &:last-child {
    width: 8%;
  }
`;

export const TotalPriceContainer = styled.div`
  margin-top: 3.125rem;
  margin-left: auto;
  font-size: 3.125rem;
  text-transform: uppercase;
`;

export const TotalPriceText = styled.span`
  font-size: 1.6rem;
  text-transform: uppercase;
`;

export const TestText = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 2.0rem;
  color: hsl(0, 100%, 66%);
  line-height: 1.4;
`;

