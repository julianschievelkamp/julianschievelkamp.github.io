import type { ProjectData } from "data/projectData";
import Headline from "elements/components/Headline/Headline";
import Link from "elements/components/Link/Link";

import Previews from "./Previews/Previews";
import { Description, StyledProjectItem } from "./ProjectItem.styles";
import Tools from "./Tools/Tools";

interface ProjectItemProps {
    index: number;
    project: ProjectData;
}

const ProjectItem = ({ index, project }: ProjectItemProps) => {
    return (
        <StyledProjectItem $index={index}>
            <Previews previews={project.previews} />

            <section>
                <Headline type="h2">
                    <Link href={project.link} target="_blank">
                        {project.title}
                    </Link>
                </Headline>

                <Description>{project.description}</Description>

                <Tools tools={project.tools} />
            </section>
        </StyledProjectItem>
    );
};

export default ProjectItem;
