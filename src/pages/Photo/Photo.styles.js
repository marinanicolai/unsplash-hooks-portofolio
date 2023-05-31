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
  display:flex;
  flex-direction:column;
  
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

export const DownloadButton = styled.button`
background-color:green;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
  text-align:center;
  &:hover {
    background-color: #45a049;
  }
`;
export const Description = styled.p`
  /* Add your description styles here */
`;