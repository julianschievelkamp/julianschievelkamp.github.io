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
        <Link index={index} onClick={() => window.open(item.link)}>
            <StyledCard>
                <ImageWrapper>
                    <Image src={item.previews[preview]} className="preview" />
                </ImageWrapper>
                <Info>
                    <Flex justifyContent="space-between">
                        <Headline bold>{item.headline}</Headline>

                        <Flex margin="0 0 0 0.5rem">
                            {item.previews.map((item, index) => {
                                return (
                                    <Thumb
                                        key={item + index}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setPreview(index);
                                        }}
                                        isActive={preview === index}
                                    >
                                        <Image src={item} />
                                    </Thumb>
                                );
                            })}
                        </Flex>
                    </Flex>
                    <Paragraph margin="1rem 0">{item.text}</Paragraph>

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
