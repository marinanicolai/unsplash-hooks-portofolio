import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled.div`
  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
  }
  font-size: 1em;
  display: flex;
  align-items: center;
`;

export const CameraImage = styled.div`
  @media (max-width: 570px) {
    display: none;
  }

  padding-top: 15px;
`;

export const Image = styled.img`
  justify-content: center;
  padding: 15px;
  max-height: 80%;
  border-radius: 7px;
`;

export const HeartImage = styled.div`
  width: 5px;
  padding-top: 15px;
  position: relative;
`;

export const TextHeart = styled.p`
  position: absolute;
  top: 20px;
`;

export const StyledLink = styled(Link)`
  color: black;
`;

export const Switch = styled.div`
  margin-left: 30px;
  display: flex;
  padding: 10px;
  /* @media (max-width: 570px) {
    width: 570px;
  } */
`;
