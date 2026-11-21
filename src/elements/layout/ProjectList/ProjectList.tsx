import { StyledProjectList } from "./ProjectList.styles";
import ProjectItem from "./ProjectItem/ProjectItem";
import { projectData } from "data/projectData";

const ProjectList = () => {
    return (
        <StyledProjectList>
            {projectData.map((project, index) => (
                <ProjectItem index={index} key={project.title} project={project} />
            ))}
        </StyledProjectList>
    );
};

export default ProjectList;
