import styled, { keyframes } from "styled-components";

import { playOnce } from "styles/animations";
import { colors, queries } from "styles/variables";

const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(10rem); }
    100% { opacity: 1;  transform: translateY(0);}
`;

export const StyledProjectItem = styled.li<{ $index: number }>`
    opacity: 0;
    ${({ $index }) => playOnce(fadeIn, `${$index * 0.2}s`)}

    width: 100%;
    padding: 1rem;
    background-color: ${colors.surface};
    border: 1px solid ${colors.border};
    display: flex;
    gap: 1rem;
    flex-direction: column;

    @media ${queries.sm} {
        flex-direction: row;
    }
`;
