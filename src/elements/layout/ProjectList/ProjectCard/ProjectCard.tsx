import type { ProjectData } from "data/projectData";
import Headline from "elements/components/Headline/Headline";
import Link from "elements/components/Link/Link";
import Image from "elements/components/Image/Image";
import Text from "elements/components/Text/Text";

import {
    Description,
    PreviewLink,
    StyledProjectCard,
    Tool,
    Tools,
} from "./ProjectCard.styles";

interface ProjectCardProps {
    index: number;
    project: ProjectData;
}

const ProjectCard = ({ index, project }: ProjectCardProps) => {
    return (
        <StyledProjectCard $index={index}>
            <PreviewLink href={project.link} target="_blank">
                <Image
                    src={project.preview}
                    alt={`Preview of ${project.title}`}
                />
            </PreviewLink>

            <section>
                <Headline type="h2">
                    <Link href={project.link} target="_blank">
                        {project.title}
                    </Link>
                </Headline>

                <Description>{project.description}</Description>

                <Tools>
                    {project.tools.map((tool) => (
                        <Tool key={tool}>
                            <Text>{tool}</Text>
                        </Tool>
                    ))}
                </Tools>
            </section>
        </StyledProjectCard>
    );
};

export default ProjectCard;
