import Icon from "elements/components/Icon/Icon";
import Text from "elements/components/Text/Text";
import styled, { keyframes } from "styled-components";
import { playOnce } from "styles/animations";
import { colors } from "styles/variables";

const fadeInDivider = keyframes`
    0% { width: 0; }
    100% { width: 100%; }
`;

const fadeInHeader = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

export const StyledHeader = styled.header`
    position: relative;
    padding-bottom: 1rem;
    margin-bottom: 1rem;

    opacity: 0;
    ${playOnce(fadeInHeader)}

    &::after {
        content: "";
        position: absolute;
        background-color: ${colors.border};
        left: 0;
        bottom: 0;
        height: 1px;

        width: 0;
        ${playOnce(fadeInDivider, "0.3s")}
    }
`;

export const ContactLine = styled(Text)`
    display: flex;
    align-items: center;
    color: ${colors.secondary};

    &:first-of-type {
        margin-top: 1rem;
    }
`;

export const ContactIcon = styled(Icon)`
    margin-right: 0.25rem;
`;
