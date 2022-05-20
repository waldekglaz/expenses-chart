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
  & h2 {
    font-size: 0.9375rem;
    margin: 4px 0;
  }
  & p {
    margin: 0;
  }
`;
