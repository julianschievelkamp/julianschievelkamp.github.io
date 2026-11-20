import { useState } from "react";
import type { ProjectData } from "data/projectData";
import Text from "elements/components/Text/Text";
import {
    StyledCard,
    Flex,
    Headline,
    FocusWrapper,
    Image,
    Thumb,
    Badge,
} from "./Card.styles";

interface CardProps {
    project: ProjectData;
    index: number;
}

const Card = ({ project, index }: CardProps) => {
    const [preview, setPreview] = useState(0);

    const openLink = () => {
        if (project.link) window.open(project.link);
    };

    return (
        <StyledCard $index={index}>
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
        </StyledCard>
    );
};

export default Card;
