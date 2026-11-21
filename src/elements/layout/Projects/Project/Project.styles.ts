import styled, { keyframes } from "styled-components";

import { borderRadius } from "styles/variables";

const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(10rem); }
    100% { opacity: 1;  transform: translateY(0);}
`;

export const StyledProject = styled.li<{ $index: number }>`
    width: 100%;
    opacity: 0;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-delay: ${(props) => `${props.$index * 0.2}s`};

    display: flex;
    border-radius: ${borderRadius.edged};
    border: 1px solid lightgrey;
    padding: 1rem;
    background-color: white;
`;
