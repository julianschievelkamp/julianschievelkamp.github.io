import styled, { keyframes } from "styled-components";

const fadeInDivider = keyframes`
    0% { width: 0; }
    100% { width: 100%; }
`;

const fadeInHeader = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

export const StyledHeader = styled.div`
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    animation-name: ${fadeInHeader};
    animation-fill-mode: forwards;
    animation-duration: 1s;
    opacity: 0;
`;

export const Divider = styled.div`
    border-bottom: 1px solid lightgrey;
    width: 0;
    animation-name: ${fadeInDivider};
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-delay: 0.3s;
`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`;
