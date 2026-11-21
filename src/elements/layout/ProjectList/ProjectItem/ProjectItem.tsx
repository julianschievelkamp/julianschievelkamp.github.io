import type { ProjectData } from "data/projectData";
import Text from "elements/components/Text/Text";
import { StyledProjectItem } from "./ProjectItem.styles";
import Previews from "./Previews/Previews";
import Tools from "./Tools/Tools";
import Headline from "elements/components/Headline/Headline";
import Link from "elements/components/Link/Link";

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

                <Text margin="1rem 0">{project.description}</Text>

                <Tools tools={project.tools} />
            </section>
        </StyledProjectItem>
    );
};

export default ProjectItem;
