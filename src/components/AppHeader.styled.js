import styled from "styled-components";

export const StyledAppHeader = styled.header`
  color: #fff;
  background-color: #ec755d;
  border-radius: 10px;
  padding: 1.25rem 1.25rem 1.375rem;
  display: flex;
  justify-content: space-between;
  align-items: centre;
  margin-bottom: 1rem;
  & img {
    width: 60px;
  }
  & .balance__title {
    font-size: 0.9375rem;
    margin: 4px 0;
    font-weight: 400;
  }
  & .balance__amount {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
  }
  @media (min-width: 565px) {
    margin-left: auto;
    margin-right: auto;
    width: 540px;
    padding: 2rem 2.5rem;
  }
  & img {
    width: 72px;
  }
  & .balance__title {
    font-size: 1.125rem;
    margin: 0.5rem 0;
  }
  & .balance__amount {
    font-size: 2rem;
  }
`;
