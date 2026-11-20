import { useState } from "react";

import {
    StyledCard,
    Flex,
    Headline,
    FocusWrapper,
    Image,
    Thumb,
    Badge,
    Content,
} from "./Card.styles";

import type { PortfolioItem } from "data/portfolioData";
import Text from "elements/components/Text/Text";

interface CardProps {
    item: PortfolioItem;
    index: number;
}

const Card = ({ item, index }: CardProps) => {
    const [preview, setPreview] = useState(0);

    const openLink = () => {
        if (item.link) window.open(item.link);
    };

    return (
        <StyledCard $index={index}>
            <Content>
                <FocusWrapper onClick={openLink} $link={item.link}>
                    <Image
                        $src={item.previews[preview]}
                        $previewPosition={item.previewPosition}
                        className="preview"
                    />
                </FocusWrapper>
                <Flex $justifyContent="space-between">
                    <Headline onClick={openLink}>{item.headline}</Headline>

                    <Flex
                        $margin="0 0 0 0.5rem"
                        $flexWrap="wrap"
                        $justifyContent="flex-end"
                    >
                        {item.previews.map((src, i) => (
                            <Thumb
                                key={src}
                                onClick={() => setPreview(i)}
                                $isActive={preview === i}
                            >
                                <Image
                                    $src={src}
                                    $previewPosition={item.previewPosition}
                                />
                            </Thumb>
                        ))}
                    </Flex>
                </Flex>
                <Flex
                    $flexDirection="column"
                    $justifyContent="space-between"
                    $height="100%"
                >
                    <Text margin="1rem 0">{item.text}</Text>

                    <Flex $flexWrap="wrap">
                        {item.badges.map((badge) => (
                            <Badge key={badge}>{badge}</Badge>
                        ))}
                    </Flex>
                </Flex>
            </Content>
        </StyledCard>
    );
};

export default Card;
