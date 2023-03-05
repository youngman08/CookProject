import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 800px;
  position: flex;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #35334d;
  align-items: center;
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
export const Form = styled.form`
  background: #261236;
  height: auto;
  width: auto;
  z-index: 1;
  display: flex;
  margin: 0 auto;
  overflow: hidden;
  padding: 32px 32px;
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
  padding: 16px 16px;
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
export const eror = styled.div`
  text-align: center;
  font-size: 14px;
  width: 30px;
  align-items: center;
  justify-content: center;
`;
export const LoginLink = styled(Link)`
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin-top: 24px;
  text-decoration: none;
`;
