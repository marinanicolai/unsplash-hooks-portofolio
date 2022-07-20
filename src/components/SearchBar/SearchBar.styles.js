import styled from "styled-components";

export const SearchIcon = styled.div`
  position: relative;
  /*top: 20px;*/
  left: 25px;
`;

export const SearchBox = styled.input`
  height: 5vh;
  border: transparent;
  font-size: 18px;
  padding-left: 30px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:active ${SearchBox} {
    border: transparent;
  }
`;

export const OuterBox = styled.div`
  display: flex;
`;
