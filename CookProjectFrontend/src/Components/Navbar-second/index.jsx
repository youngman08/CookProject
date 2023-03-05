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
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrolNav={scrolNav}>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome} smooth duration={1000} spy>
          AshpazBashi
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
              <NavLinks to="/">
                خانه
              </NavLinks>
        </NavBarContainer>
        <NavBtn>
          <NavBtnLink to="/login">ورود</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
