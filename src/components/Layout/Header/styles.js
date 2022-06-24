import styled, { keyframes } from "styled-components";
import { softShadow } from "styles/variables";

const fadeIn = keyframes`
    0% { width: 0; }
    100% { width: 100%; }
`;

export const StyledHeader = styled.div`
    height: 10rem;
    padding: 1rem;
    padding-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const Divider = styled.div`
    border-bottom: 1px solid rgb(0, 0, 0, 0.3);
    width: 0;
    margin-top: 1rem;

    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-delay: 0.3s;
    box-shadow: ${softShadow};
`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`;
