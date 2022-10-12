import React from "react";
import {
  blueGoodie,
  facebookIcon,
  linkedinIcon,
  pinkGoodie,
  pinterestIcon,
  twitterIcon,
  yellowGoodieSmileTop,
} from "../../images";
import * as Styled from "./Footer.styled";

const Footer = () => {
  const links = [linkedinIcon, twitterIcon, facebookIcon, pinterestIcon];

  return (
    <Styled.Container>
      <Styled.pinkGoodie src={pinkGoodie} alt="pinkGoodie" />
      <Styled.blueGoodie src={blueGoodie} alt="blueGoodie" />
      <Styled.yellowGoodieSmileTop
        src={yellowGoodieSmileTop}
        alt="yellowGoodieSmileTop"
      />
      <Styled.LinksContainer>
        {links.map((link, idx) => (
          <img src={link} alt={`link${idx}`} key={idx} />
        ))}
      </Styled.LinksContainer>
    </Styled.Container>
  );
};

export default Footer;
