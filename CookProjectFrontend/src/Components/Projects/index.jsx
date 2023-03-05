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
import image1 from "../../images/image_(4).svg";
import image2 from "../../images/image_(5).svg";
import image3 from "../../images/image_(6).svg";
const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsH1> شرکت های طرف قرار داد</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsImage src={image1}></ProjectsImage>
          <ProjectsH2>Project 1</ProjectsH2>
          <ProjectsP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImage src={image2}></ProjectsImage>
          <ProjectsH2>Project 2</ProjectsH2>
          <ProjectsP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImage src={image3}></ProjectsImage>
          <ProjectsH2>Project 3</ProjectsH2>
          <ProjectsP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
