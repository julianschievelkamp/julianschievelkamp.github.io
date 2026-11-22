import styled, { keyframes } from "styled-components";

import { playOnce } from "styles/animations";
import { colors } from "styles/variables";

const fadeInBorder = keyframes`
    from { width: 0; }
    to { width: 100%; }
`;

const fadeInHeader = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
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
        ${playOnce(fadeInBorder, "0.2s")}
    }
`;

export const Contact = styled.div`
    margin-top: 1rem;
    gap: 1rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
`;
