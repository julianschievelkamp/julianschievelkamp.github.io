import type { ProjectData } from "data/projectData";
import Text from "elements/components/Text/Text";
import { StyledProject } from "./Project.styles";
import Previews from "./Previews/Previews";
import Tools from "./Tools/Tools";
import Headline from "elements/components/Headline/Headline";

interface ProjectProps {
    index: number;
    project: ProjectData;
}

const Project = ({ index, project }: ProjectProps) => {
    return (
        <StyledProject $index={index}>
            <Previews previews={project.previews} />

            <div>
                <Headline type="h2">{project.title}</Headline>
                <Text margin="1rem 0">{project.description}</Text>

                <Tools tools={project.tools} />
            </div>
        </StyledProject>
    );
};

export default Project;
