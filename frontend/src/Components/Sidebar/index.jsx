import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();

  };
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink onClick={toggleHome} to="/">
            خانه
          </SidebarLink>
          <SidebarLink onClick={toggle} to="About">
            درباره ی ما
          </SidebarLink>
          <SidebarLink onClick={toggle} to="About1">
            تیم ما
          </SidebarLink>
          <SidebarLink onClick={toggle} to="Cheif">
          همکاری با ما
          </SidebarLink>
          <SidebarLink onClick={toggle} to="Blog">
           بلاگ
          </SidebarLink>
          <SidebarLink onClick={toggle} to="Experience">
           شرکت ها
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/login">ورود</SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
