import type { ProjectData } from "data/projectData";
import Headline from "elements/components/Headline/Headline";
import Link from "elements/components/Link/Link";
import Image from "elements/components/Image/Image";

import {
    Description,
    StyledProjectItem,
    Tool,
    Tools,
} from "./ProjectItem.styles";

interface ProjectItemProps {
    index: number;
    project: ProjectData;
}

const ProjectItem = ({ index, project }: ProjectItemProps) => {
    return (
        <StyledProjectItem $index={index}>
            <Link href={project.link} target="_blank">
                <Image src={project.preview} alt="" />
            </Link>

            <section>
                <Headline type="h2">
                    <Link href={project.link} target="_blank">
                        {project.title}
                    </Link>
                </Headline>

                <Description>{project.description}</Description>

                <Tools>
                    {project.tools.map((tool) => (
                        <Tool key={tool}>{tool}</Tool>
                    ))}
                </Tools>
            </section>
        </StyledProjectItem>
    );
};

export default ProjectItem;
