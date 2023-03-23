import styled from "styled-components";

export const SearchIcon = styled.div`
  position: relative;
  /*top: 20px;*/
  left: 25px;
`;

export const SearchBox = styled.input`
  @media (max-width: 570px) {
    width: 300px;
  }
  /* height: 5vh; */
  border: none;
  font-size: 18px;
  /* padding-left: 30px; */
  ::placeholder {
    padding-left: 20px;
    background-color: #24292f;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:active ${SearchBox} {
    border: none;
  }
`;

export const OuterBox = styled.div`
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  @media (max-width: 570px) {
    display: none;
  }
  font-size: 1em;
  height: 35px;
  width: 55px;
  border-radius: 5px;
  border: transparent;
  margin-right: 15px;
  margin-left: 15px;
  background-color: #32a8a4;
`;

export const StyledForm = styled.form`
  border: dotted 1px grey;
  border-radius: 15px;
`;
