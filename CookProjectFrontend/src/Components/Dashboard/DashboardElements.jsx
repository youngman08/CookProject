import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 100vh;
  position: flex;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #6776c6;
`;

export const Sidebar = styled.div`
  text-align: center;
  padding-top: 100px;
  color: #fff;
  font-size: 14px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  color: #fff;
  z-index: 99;
  background: #6776c6;
`;
export const Image = styled.img`
  text-align: center;
  margin: 0 auto !important;
`;
export const Mbutton = styled(Link)`
  color: white;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
`;
