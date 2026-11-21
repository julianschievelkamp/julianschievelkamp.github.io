import styled, { keyframes } from "styled-components";

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
    animation-name: ${fadeInHeader};
    animation-fill-mode: forwards;
    animation-duration: 1s;

    &::after {
        content: "";
        position: absolute;
        background-color: lightgrey;
        left: 0;
        bottom: 0;
        height: 1px;

        width: 0;
        animation-name: ${fadeInDivider};
        animation-fill-mode: forwards;
        animation-duration: 1s;
        animation-delay: 0.3s;
    }
`;
