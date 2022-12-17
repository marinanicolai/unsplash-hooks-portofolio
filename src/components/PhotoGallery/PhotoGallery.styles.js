import styled from "styled-components";

export const Close = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 31px;
  width: 31px;
  cursor: pointer;
`;

export const SavedImg = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 31px;
  width: 31px;
  cursor: pointer;
  /* margin-bottom: 0px; */
  margin-left: 150px;

  /* float: right; */
`;
export const Likes = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 31px;
  width: 31px;
  cursor: pointer;
`;

export const Profile = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 31px;
  width: 31px;
  cursor: pointer;
`;

export const StyledArrow = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  height: 31px;
  width: 31px;
  margin: auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LikedBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
`;

export const Footer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;
