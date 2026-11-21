import styled, { keyframes } from "styled-components";

import Text from "elements/components/Text/Text";
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

    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;

    @media ${queries.md} {
        grid-template-columns: 1fr 1fr;
    }
`;

export const Description = styled(Text)`
    margin: 1rem 0;
`;

export const Tools = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const Tool = styled(Text)`
    background: ${colors.background};
    padding: 0.5rem 1rem;
    border: 1px solid ${colors.border};
`;
