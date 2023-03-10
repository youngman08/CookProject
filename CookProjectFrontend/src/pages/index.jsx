import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutMe from "../Components/AboutMe";
import InfoSection from "../Components/InfoSection";
import { homeObject, homeObjectFour, homeObjectThree, homeObjectTwo } from "../Components/InfoSection/Data";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutMe />
      <InfoSection {...homeObject} />
      <InfoSection {...homeObjectTwo} />
      <Projects   />
      <InfoSection {...homeObjectThree} />

      <Footer/>
    </>
  );
};

export default Home;
