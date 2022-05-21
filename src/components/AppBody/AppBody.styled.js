import styled from "styled-components";

export const StyledAppBody = styled.div`
  border-radius: 10px;
  background-color: #fffbf6;
  padding: 1.5rem 1rem;
  & h1 {
    font-size: 1.5rem;
    color: #382314;
    margin-bottom: 3.25rem;
  }
  & .divider {
    height: 2px;
    border-radius: 1px;
    background: #f8e9dd;
    color: #f8e9dd;
    margin-bottom: 1.5rem;
  }
  & .app__footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    & .total-text,
    .percentage-text {
      font-size: 0.9375rem;
      color: #92857a;
      margin: 0 0 4px;
    }
    & .total-amount {
      font-size: 1.875rem;
      color: #382314;
      font-weight: 700;
      margin: 0;
    }
    & .percentage {
      text-align: right;
      font-size: 0.9375rem;
      color: #382314;
      font-weight: 700;
      margin: 0;
    }
  }
  @media (min-width: 565px) {
    margin: 0 auto;
    padding: 2rem 2.5rem;
    width: 540px;
    & h1 {
      font-size: 2rem;
      margin-bottom: 4.125rem;
    }
    & .app__footer {
      & .total-amount {
        font-size: 3rem;
      }
      & .total-text,
      .percentage-text {
        font-size: 1.125rem;
      }
      & .percentage {
        font-size: 1.125rem;
      }
    }
  }
`;
