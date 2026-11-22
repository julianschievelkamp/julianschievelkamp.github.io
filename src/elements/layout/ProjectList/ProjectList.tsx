import { projectData } from "data/projectData";

import ProjectCard from "./ProjectCard/ProjectCard";
import { StyledProjectList } from "./ProjectList.styles";

const ProjectList = () => {
    return (
        <StyledProjectList>
            {projectData.map((project, index) => (
                <ProjectCard
                    index={index}
                    key={project.title}
                    project={project}
                />
            ))}
        </StyledProjectList>
    );
};

export default ProjectList;
