import styled from "styled-components";

export const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

export const CameraImage = styled.div`
  padding-top: 15px;
  background-image: url(${(props) => props.img});
`;

export const Image = styled.img`
  justify-content: center;
  padding: 15px;
  max-height: 80%;
`;

export const HeartImage = styled.div`
  padding-top: 15px;
  background-image: url(${(props) => props.img});
`;
