import styled from "styled-components";
import { Row } from "antd";

export const Container = styled.div`
  border-radius: 0.75rem;
  margin-bottom: 1rem;
`;

export const SocialMediaRow = styled(Row)`
  padding-top: 0.3rem;
  justify-content: center;
  align-items: center;

  a {
    padding-top: 0.2rem;
    margin: 0.2rem 1rem;
    color: #808080;
  }
`;

export const InfoRow = styled(Row)`
  padding-bottom: 0.5rem;
  justify-content: center;
  align-items: center;
  strong {
    padding: 0.2rem;
  }
`;

export const Img = styled.div`
  display: flex;
  height: 20px;
  width: 20px;
  margin-left: 0.2rem;
`;
