import { StyledProjects } from "./Projects.styles";
import Project from "./Project/Project";
import { projectData } from "data/projectData";

const Projects = () => {
    return (
        <StyledProjects>
            {projectData.map((project, index) => (
                <Project key={project.title} project={project} index={index} />
            ))}
        </StyledProjects>
    );
};

export default Projects;
