import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: flex !important;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #35334d;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
`;
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;
export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const Form = styled.div`
  background: #261236;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 29px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;
export const FormLabel = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;
export const FormButton = styled.button`
  background: #fab209;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
export const Text = styled.div`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
export const Sidebar = styled.div`
  text-align: center;
  color: #fff;
  font-size: 14px;
  width: 270px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  color: #282f53;
  z-index: 99;
  background: #fff;
`;
export const Image = styled.img`
  text-align: center;
  margin: 0 auto !important;
`;
export const Mbutton = styled(Link)`
  text-align: center;
  margin: 0 auto !important;
  color: #010606;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
`;
