import React, { useState } from "react";

import Hero from "../../images/hero2.jpg";
import { Button } from "../ButtonElements";
import {useNavigate}  from 'react-router-dom';
import {
  HeroBg,
  HeroP,
  HeroContainer,
  HeroContent,
  HeroH1,
  ImageBg,
  ArrowForward,
  ArrowRight,
  HeroBtnWrapper,
} from "./HeroElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  const navigate = useNavigate();
  const search = () => {
    navigate('/search');
  }
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={Hero}></ImageBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>سرتاسر دستور پخت</HeroH1>
        <HeroP>غذا مورد علاقت رو جستجو کن و  طرز تهیه‌اش رو یاد بگیر!!!!!</HeroP>
        <HeroBtnWrapper>
          <Button onClick={search} primary={+true} onMouseEnter={onHover} onMouseLeave={onHover} dark={+true}>
            جستجو{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
