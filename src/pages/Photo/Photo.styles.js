import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ImageContainer = styled.div`
  margin-bottom: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const AuthorName = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 14px;
  font-weight: bold;

  span {
    margin-right: 5px;
  }
`;
