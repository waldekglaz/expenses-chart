import styled from "styled-components";

export const StyledChart = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  text-align: center;
  margin-bottom: 1.5rem;
  & .chart-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & .amount {
    background-color: #382314;
    color: #fffbf6;
    font-size: 14px;
    border-radius: 5px;
    margin-bottom: 0.5rem;
    padding: 0.125rem 0.25rem;
    font-weight: 700;
    opacity: 0;
    transition: 1s;
  }
  & .amount.visible {
    opacity: 1;
  }
  & .column {
    border-radius: 3px;
    width: 33px;
  }
  & .column:hover {
    cursor: pointer;
  }

  & .day {
    font-size: 12px;
    color: #92857a;
  }
  @media (max-width: 374px) {
    & .amount {
      font-size: 10px;
      border-radius: 5px;
      margin-bottom: 0.5rem;
      padding: 0.125rem 0.25rem;
    }
    & .column {
      width: 23px;
    }
  }
  @media (min-width: 565px) {
    & .column {
      width: 50px;
      margin-bottom: 0.5rem;
    }
    & .amount {
      font-size: 1.125rem;
      border-radius: 5px;
      padding: 0.375rem 0.25rem;
    }
    & .day {
      font-size: 0.9375rem;
    }
  }
`;
