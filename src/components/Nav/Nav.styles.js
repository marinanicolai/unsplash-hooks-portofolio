import styled from "styled-components";

export const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

export const CameraImage = styled.div`
  background-image: url(${(props) => props.img});
`;
