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

import { PortfolioItem } from "data/portfolioData";
import Text from "elements/components/Text/Text";

const Card = ({ item, index }: { item: PortfolioItem; index: number }) => {
    const [preview, setPreview] = useState(0);

    return (
        <StyledCard $index={index}>
            <Content>
                <FocusWrapper
                    onClick={() => item.link && window.open(item.link)}
                    $link={item.link}
                >
                    <Image
                        src={item.previews[preview]}
                        $previewPosition={item.previewPosition}
                        className="preview"
                    />
                </FocusWrapper>
                <Flex $justifyContent="space-between">
                    <Headline
                        onClick={() => item.link && window.open(item.link)}
                    >
                        {item.headline}
                    </Headline>

                    <Flex
                        $margin="0 0 0 0.5rem"
                        $flexWrap="wrap"
                        $justifyContent="flex-end"
                    >
                        {item.previews.map((src, index) => {
                            return (
                                <Thumb
                                    key={src + index}
                                    onClick={() => setPreview(index)}
                                    $isActive={preview === index}
                                >
                                    <Image
                                        src={src}
                                        $previewPosition={item.previewPosition}
                                    />
                                </Thumb>
                            );
                        })}
                    </Flex>
                </Flex>
                <Flex
                    $flexDirection="column"
                    $justifyContent="space-between"
                    height="100%"
                >
                    <Text margin="1rem 0">{item.text}</Text>

                    <Flex $flexWrap="wrap">
                        {item.badges.map((badge) => {
                            return <Badge key={badge}>{badge}</Badge>;
                        })}
                    </Flex>
                </Flex>
            </Content>
        </StyledCard>
    );
};

export default Card;
