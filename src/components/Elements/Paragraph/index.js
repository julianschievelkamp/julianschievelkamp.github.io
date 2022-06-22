import React from "react";
import PropTypes from "prop-types";

import { StyledParagraph } from "./styles";

const Paragraph = (props) => {
    return <StyledParagraph {...props}>{props.children}</StyledParagraph>;
};

Paragraph.propTypes = {
    children: PropTypes.any.isRequired,
    textAlign: PropTypes.string,
    bold: PropTypes.bool,
    margin: PropTypes.string,
};

Paragraph.defaultProps = {
    children: "Hello World!",
    margin: "0",
};

export default Paragraph;
