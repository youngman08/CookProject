import React from "react";
import {
  ProjectsCard,
  ProjectsContainer,
  ProjectsH1,
  ProjectsH2,
  ProjectsImage,
  ProjectsP,
  ProjectsWrapper,
} from "./ProjectsElements";
import image1 from "../../images/1-c.png";
import image2 from "../../images/2-c.png";
import image3 from "../../images/3-c.png";
const Projects = () => {
  return (
    <ProjectsContainer id="Projects">
      <ProjectsH1> شرکت های طرف قرار داد</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsImage src={image1}></ProjectsImage>
          <ProjectsH2>فست فود امیر برگر</ProjectsH2>
          <ProjectsP>
            بهترین پیتزا فروشی ایران در قرن گذشته
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImage src={image2}></ProjectsImage>
          <ProjectsH2>شیلا</ProjectsH2>
          <ProjectsP>
            سریع ترین تحویل غذا
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImage src={image3}></ProjectsImage>
          <ProjectsH2>گرین برگر</ProjectsH2>
          <ProjectsP>
            خوش مزه ترین برگر ها
          </ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
