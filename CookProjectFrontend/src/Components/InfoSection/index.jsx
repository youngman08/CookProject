import React from "react";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./InfoSectionElements";
import { Button } from "../ButtonElements";
const InfoSection = ({
  id,
  lightBg,
  imgStart,
  topLine,
  heading,
  description,
  buttonLable,
  img,
  alt,
}) => {
  return (
      <InfoContainer LightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading LightBg={lightBg}>{heading}</Heading>
                <Subtitle LightBg={lightBg}>{description}</Subtitle>
                <BtnWrap>
                  <Button to="home" primary={!lightBg} dark={!lightBg}>
                    بیشتر
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}></Img>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
  );
};

export default InfoSection;
