import React from "react";
import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItem,
  FooterLinksTitle,
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
              <FooterLinksTitle>درباره ما</FooterLinksTitle>
              <FooterLink to="home">خانه</FooterLink>
              <FooterLink to="courses">استخدام</FooterLink>
              <FooterLink to="blog">بلاگ</FooterLink>
              
            </FooterLinksItem>
            </FooterLinksItem>
            <FooterLinksItem>
              <FooterLinksTitle>About us</FooterLinksTitle>
              <FooterLink to="home">Home</FooterLink>
              <FooterLink to="courses">Courses</FooterLink>
              <FooterLink to="blog">Blog</FooterLink>
              <FooterLink to="rouadmap">Rouadmap</FooterLink>
            </FooterLinksItem>
          </FooterLinksWrapper>
          
        </FooterLinksContainer>
        <SocialMediaContainer>
          <SocialMediaWrap>
            <SocialLogo>AshpazBashi</SocialLogo>
            <WebsitesRights>AshpazBashi Copy Rights 2023</WebsitesRights>
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
