import { projectData } from "data/projectData";

import ProjectItem from "./ProjectItem/ProjectItem";
import { StyledProjectList } from "./ProjectList.styles";

const ProjectList = () => {
    return (
        <StyledProjectList>
            {projectData.map((project, index) => (
                <ProjectItem
                    index={index}
                    key={project.title}
                    project={project}
                />
            ))}
        </StyledProjectList>
    );
};

export default ProjectList;
