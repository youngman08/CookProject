import React from "react";
import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItem,
  NavLinkss,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLinks,
  SocialIcons,
  SocialLogo,
  SocialMediaContainer,
  SocialMediaWrap,
  WebsitesRights,
} from "./FooterElements";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItem>
            <FooterLinksItem>
              <NavLinkss to="home" >خانه</NavLinkss>
              <NavLinkss to="About">درباره ی ما</NavLinkss>
              <NavLinkss to="About1">تیم ما</NavLinkss>
              <NavLinkss to="Blog">بلاگ</NavLinkss>
              <NavLinkss to="Projects">شرکت ها</NavLinkss>

              
            </FooterLinksItem>
            </FooterLinksItem>
            <FooterLinksItem>

            </FooterLinksItem>
          </FooterLinksWrapper>
          
        </FooterLinksContainer>
        <SocialMediaContainer>
          <SocialMediaWrap>
            <SocialLogo>آشپزباشی</SocialLogo>
            <WebsitesRights>تمامی حقوق مخصوص این سایت می باشد</WebsitesRights>
            <SocialIcons>
              <SocialIconLinks>
                <FaFacebook />
              </SocialIconLinks>
              <SocialIconLinks>
                <FaYoutube />
              </SocialIconLinks>
              <SocialIconLinks>
                <FaTwitter />
              </SocialIconLinks>
              <SocialIconLinks>
                <FaInstagram />
              </SocialIconLinks>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMediaContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
