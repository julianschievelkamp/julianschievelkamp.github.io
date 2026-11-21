import { StyledProjectList } from "./ProjectList.styles";
import Project from "./Project/Project";
import { projectData } from "data/projectData";

const ProjectList = () => {
    return (
        <StyledProjectList>
            {projectData.map((project, index) => (
                <Project key={project.title} project={project} index={index} />
            ))}
        </StyledProjectList>
    );
};

export default ProjectList;
