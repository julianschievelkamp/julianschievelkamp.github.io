import { useState } from "react";
import type { ProjectData } from "data/projectData";
import Text from "elements/components/Text/Text";
import {
    StyledProject,
    Flex,
    Headline,
    FocusWrapper,
    Image,
    Thumb,
    Badge,
} from "./Project.styles";

interface ProjectProps {
    project: ProjectData;
    index: number;
}

const Project = ({ project, index }: ProjectProps) => {
    const [preview, setPreview] = useState(0);

    const openLink = () => {
        if (project.link) window.open(project.link);
    };

    return (
        <StyledProject $index={index}>
            <div>
                <FocusWrapper onClick={openLink} $link={project.link}>
                    <Image
                        $src={project.previews[preview]}
                        className="preview"
                    />
                </FocusWrapper>

                <Flex
                    $margin="0 0 0 0.5rem"
                    $flexWrap="wrap"
                    $justifyContent="flex-end"
                >
                    {project.previews.map((src, i) => (
                        <Thumb
                            key={src}
                            onClick={() => setPreview(i)}
                            $isActive={preview === i}
                        >
                            <Image $src={src} />
                        </Thumb>
                    ))}
                </Flex>
            </div>

            <div>
                <Headline onClick={openLink}>{project.title}</Headline>
                <Text margin="1rem 0">{project.description}</Text>
                {project.tools.map((tool) => (
                    <Badge key={tool}>{tool}</Badge>
                ))}
            </div>
        </StyledProject>
    );
};

export default Project;
