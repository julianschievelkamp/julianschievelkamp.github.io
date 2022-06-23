import React from "react";
import PropTypes from "prop-types";

import {
    Link,
    StyledCard,
    Headline,
    ImageWrapper,
    Image,
    Info,
    BadgeWrapper,
    Badge,
} from "./styles";

import Paragraph from "components/Elements/Paragraph";

const Card = ({ item, index }) => {
    return (
        <Link href={item.link} target="_blank" index={index}>
            <StyledCard>
                <ImageWrapper>
                    <Image src={item.previews[0]} className="image" />
                </ImageWrapper>
                <Info>
                    <Headline bold>{item.headline}</Headline>
                    <Paragraph margin="1rem 0" textAlign="justify">
                        {item.text}
                    </Paragraph>

                    <BadgeWrapper>
                        {item.badges.map((badge) => {
                            return <Badge key={badge}>{badge}</Badge>;
                        })}
                    </BadgeWrapper>
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
