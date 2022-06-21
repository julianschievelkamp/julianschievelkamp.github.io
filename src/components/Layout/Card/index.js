import React from "react";
import PropTypes from "prop-types";

import {
    StyledCard,
    ImageWrapper,
    Image,
    Info,
    BadgeWrapper,
    Badge,
} from "./styles";
import Paragraph from "components/Elements/Paragraph";

const Card = ({ link, image, headline, text, badges }) => {
    return (
        <StyledCard href={link} target="_blank">
            <ImageWrapper>
                <Image src={image} className="image" />
            </ImageWrapper>
            <Info>
                <Paragraph bold>{headline}</Paragraph>
                <Paragraph margin="1rem 0">{text}</Paragraph>

                <BadgeWrapper>
                    {badges.map((badge) => {
                        return <Badge key={badge}>{badge}</Badge>;
                    })}
                </BadgeWrapper>
            </Info>
        </StyledCard>
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
