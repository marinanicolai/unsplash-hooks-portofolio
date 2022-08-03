import styled from "styled-components";

export const Navigation = styled.div`
  font-family: "Times New Roman";
  font-size: 1em;
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
  width: 5px;
  padding-top: 15px;
  background-image: url(${(props) => props.img});
`;
