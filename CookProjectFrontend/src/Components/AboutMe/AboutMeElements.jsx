import styled from "styled-components";
export const AboutContainer = styled.div`
  background: #eceff4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 690px;
  position: relative;
  z-index: 1;
`;
export const AboutTitle = styled.span`
  font-size: 15px;
  text-transform: uppercase;
  background-clip: text;
  letter-spacing: 0.1em;
  display: inline-block;
`;
export const AboutHeading = styled.h2`
  font-size: 45px;
  line-height: 1.2;
  margin-bottom: 30px;
  transition: all 0.3s ease-out 0s;
  margin-top: 0px;
  text-align: center;
`;
export const AboutP = styled.p`
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 40px;
  padding: 0 0;
  text-align: center;
`;
export const AboutBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
