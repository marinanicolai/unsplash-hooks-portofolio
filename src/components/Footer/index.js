import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import { Container, SocialMediaRow, InfoRow, Img } from "./Footer.styles";

const Footer = () => {
  return (
    <>
      <Container>
        <SocialMediaRow>
          <a
            href="https://www.linkedin.com/in/marina-nicolai-b627b1128/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size="1.5rem" />
          </a>
          <a href="mailto:nicolaimarina@gmail.com">
            <HiMail size="1.6rem" />
          </a>
          <a
            href="https://github.com/marinanicolai"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare size="1.55rem" />
          </a>
        </SocialMediaRow>
        <InfoRow>
          Created by <strong>Marina Nicolai</strong>/ Powered by
          <Img>
            <img
              src="https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/30581/Unsplash_Symbol.png"
              alt="Unsplash"
              width="100%"
            />
          </Img>
          <strong>Unsplash API</strong>
          <span className={"hide-xs"}> - 2022</span>
        </InfoRow>
      </Container>
    </>
  );
};

export default Footer;
