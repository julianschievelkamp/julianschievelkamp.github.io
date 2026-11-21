import { css, styled } from "styled-components";

const headlineStyles = css`
    margin: 0;
    text-transform: uppercase;
    font-family: "PlayfairDisplay", sans-serif;
    font-weight: 900;
    line-height: 1.5;
`;

export const H1 = styled.h1`
    ${headlineStyles}
`;

export const H2 = styled.h2`
    ${headlineStyles}
`;
