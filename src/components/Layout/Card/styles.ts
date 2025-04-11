import styled, { keyframes } from "styled-components";

import Paragraph from "components/Elements/Paragraph";

import { borderRadius, shadow, softShadow, transition } from "styles/variables";

const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(10rem); }
    100% { opacity: 1;  transform: translateY(0);}
`;

export const StyledCard = styled.div<{ index: number }>`
    width: 100%;
    flex-grow: 1;
    margin: 1rem 0;
    opacity: 0;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-delay: ${(props) => `${props.index * 0.2}s`};
    min-width: 30%;
    max-width: 30rem;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-shadow: ${shadow};
    border-radius: ${borderRadius.edged};
    border: 1px solid lightgrey;
    padding: 1rem;
    transition: 500ms;

    a {
        text-decoration: none;
    }

    @media (hover: hover) {
        &:hover {
            transform: translateY(-8px);
            box-shadow: ${softShadow};

            .preview {
                transform: scale(1.05);
            }
        }
    }
`;

export const Headline = styled.button`
    background: #ffca00;
    padding: 0.5rem 1rem;
    display: inline-block;
    border-radius: 3px;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
`;

export const FocusWrapper = styled.div<{ link?: string }>`
    position: relative;
    width: 100%;
    height: 20rem;
    min-height: 20rem;
    overflow: hidden;
    border-radius: 6px;
    margin-bottom: 1rem;
    cursor: ${(props) => props.link && "pointer"};
    display: flex;
    justify-content: center;
`;

export const Image = styled.div<{ src: string; previewPosition: string }>`
    background: ${(props) => `url(${props.src})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: ${(props) => props.previewPosition};
    width: 100%;
    height: 100%;
    transition: transform ${transition};
`;

export const Badge = styled(Paragraph)`
    background: whitesmoke;
    border-radius: ${borderRadius.round};
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    margin: 0.5rem;
    margin-left: 0;
    border: 1px solid lightgrey;
`;

export const Flex = styled.div<{
    flexDirection?: string;
    flexWrap?: string;
    justifyContent?: string;
    alignItems?: string;
    margin?: string;
    height?: string;
}>`
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    flex-wrap: ${(props) => props.flexWrap};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    margin: ${(props) => props.margin};
    height: ${(props) => props.height};
`;

export const Thumb = styled.div<{ isActive: boolean }>`
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    overflow: hidden;
    transition: ${transition};
    background: ${(props) => (props.isActive ? "#ffca00" : "transparent")};
    padding: 3px;
    margin-left: 2px;
    border-radius: 3px;

    div {
        border-radius: 3px;
    }
`;
