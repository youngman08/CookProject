import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { useLogin } from "../../hooks/useLogin";

export const LoginNavbarButton = () => {
  const user = useLogin();
  return (<NavBtn>
    {user === "unauth" ? <NavBtnLink to="/login">ورود</NavBtnLink> : <>
      <NavBtnLink to="/dashboard">داشبورد</NavBtnLink>
      <NavBtnLink to="/create_recipe">ساخت غذای جدید</NavBtnLink>
    </>}
  </NavBtn>);
}

const Navbar = ({ toggle }) => {
  const [scrolNav, setScrolNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrolNav(+true);
    } else {
      setScrolNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <>
      <Nav scrolNav={scrolNav}>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome} smooth duration={1000} spy>AshpazBashi</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/" onClick={toggleHome} smooth duration={1000} spy>خانه</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="About" smooth duration={1000} spy offset={-80}>درباره ی ما</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="About1" smooth duration={1000} spy offset={-80}>تیم ما</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Cheif" smooth duration={1000} spy offset={-80}>همکاری با ما</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Blog" smooth duration={1000} spy offset={-80}>بلاگ</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Experience" smooth duration={1000} spy offset={-80}>شرکت ها</NavLinks>
            </NavItem>
          </NavMenu>
          <LoginNavbarButton />
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
