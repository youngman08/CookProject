import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-attachment: fixed;
  z-index: 0;
  :before {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
      120deg,
      rgb(111, 110, 115) 0%,
      rgba(0, 0, 0, 0.7) 81%,
      rgba(0, 0, 0, 0.22) 100%
    );
  }
`;

export const HeroBg = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

`;

export const HeroLabel = styled.label`
  color: darkslategray;
  font-weight: bold;
  font-size: 18px;
  display: block;
  align-items: right;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: 1;
`;
export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
`;
export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  @media screen and(max-width:768px) {
    font-size: 40px;
  }
  @media screen and(max-width:480px) {
    font-size: 32px;
  }
  margin-top: 50px;
`;
export const HeroP = styled.p`
  margin-top: 32px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  @media screen and(max-width:768px) {
    font-size: 40px;
  }
  @media screen and(max-width:480px) {
    font-size: 32px;
  }
`;

export const HeroLi = styled.li`
  display: inline;
  padding: 0px 10px 0px 15px;
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowLeft)`
  margin-left: 8px;
  font-size: 20px;
`;
export const Searchcontainer = styled.div`
  width: 100%;
  background: rgb(218, 217, 216);
  border-radius: 28px;
  margin-top: 50px;
  margin-bottom: 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
`;
