import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flext-start;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0px 24px;
  max-width: 1100px;
`;
export const Nav = styled.div`
  background: ${({scrolNav})=>(scrolNav?'#000':'#35334d')};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(60%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;
`;
export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  &.active {
    border-bottom: 3px solid #fab209;
  }
`;
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background-color: #fab209;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
