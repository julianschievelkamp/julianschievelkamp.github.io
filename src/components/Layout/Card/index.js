import React, { useState } from "react";
import PropTypes from "prop-types";

import {
    Link,
    StyledCard,
    Flex,
    Headline,
    ImageWrapper,
    Image,
    Thumb,
    Info,
    Badge,
} from "./styles";

import Paragraph from "components/Elements/Paragraph";

const Card = ({ item, index }) => {
    const [preview, setPreview] = useState(0);

    return (
        <Link href={item.link} target="_blank" index={index}>
            <StyledCard>
                <ImageWrapper>
                    <Image src={item.previews[preview]} className="preview" />
                </ImageWrapper>
                <Info>
                    <Flex justifyContent="space-between">
                        <Headline bold>{item.headline}</Headline>

                        <Flex margin="0 0 0 0.5rem">
                            {item.previews.map((preview, index) => {
                                return (
                                    <Thumb
                                        key={preview + index}
                                        onClick={() => setPreview(index)}
                                        isActive={preview === index}
                                    >
                                        <Image src={preview} />
                                    </Thumb>
                                );
                            })}
                        </Flex>
                    </Flex>
                    <Paragraph margin="1rem 0" textAlign="justify">
                        {item.text}
                    </Paragraph>

                    <Flex flexWrap="wrap">
                        {item.badges.map((badge) => {
                            return <Badge key={badge}>{badge}</Badge>;
                        })}
                    </Flex>
                </Info>
            </StyledCard>
        </Link>
    );
};

Card.propTypes = {
    item: PropTypes.object,
};

Card.defaultProps = {};

export default Card;
