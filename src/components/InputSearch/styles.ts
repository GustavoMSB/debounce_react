import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: #ffffff20;
  width: 300px;
  justify-content: space-between;
  margin: 1rem 0;

  input,
  button {
    border: 0;
    color: #fff;
    background: transparent;
    border-radius: 0.5rem;

    padding: 0 1rem;
  }

  input {
    outline: 0;
    width: 100%;
  }

  button {
    width: 3rem;
  }
`;
