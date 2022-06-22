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

const Card = ({ link, image, headline, text, badges, index }) => {
    return (
        <Link href={link} target="_blank" index={index}>
            <StyledCard>
                <ImageWrapper>
                    <Image src={image} className="image" />
                </ImageWrapper>
                <Info>
                    <Headline bold>{headline}</Headline>
                    <Paragraph margin="1rem 0" textAlign="justify">
                        {text}
                    </Paragraph>

                    <BadgeWrapper>
                        {badges.map((badge) => {
                            return <Badge key={badge}>{badge}</Badge>;
                        })}
                    </BadgeWrapper>
                </Info>
            </StyledCard>
        </Link>
    );
};

Card.propTypes = {
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    text: PropTypes.any.isRequired,
};

Card.defaultProps = {};

export default Card;
