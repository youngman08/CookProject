import React from "react";
import {
  AboutBtnWrapper,
  AboutContainer,
  AboutHeading,
  AboutP,
  AboutTitle,
} from "./AboutMeElements";
import { Button } from "../ButtonElements";
const AboutMe = () => {
  return (
    <>
      <AboutContainer id="About">
        <AboutTitle>درباره ما</AboutTitle>
        <AboutHeading>بیش از 2000 دستور غذای مختلف</AboutHeading>
        <AboutP>
          
        تیم ما در تلاش برای بهبود و توسعه همه جانبه
         سامانه بخصوص در بخش دستور غذا است و با همکاری با بهترین
         سرآشپز های های دنیا تا بتوانیم غذایی لذیذ را به سفر های شما بیاوریم.
        </AboutP>
        <AboutBtnWrapper>
          <Button to="/">بیشتر</Button>
        </AboutBtnWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutMe;
