import styled, { keyframes } from "styled-components";

import Paragraph from "components/Elements/Paragraph";

import { borderRadius, shadow, softShadow, transition } from "styles/variables";

const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(10rem); }
    100% { opacity: 1;  transform: translateY(0);}
`;

export const Link = styled.div`
    width: 100%;
    max-width: 40rem;
    text-decoration: none;
    flex-grow: 1;
    margin: 1rem;

    opacity: 0;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-delay: ${(props) => `${props.index * 0.2}s`};
`;

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-shadow: ${shadow};
    border-radius: ${borderRadius.edged};
    padding: 1rem;
    transition: 500ms;

    &:hover {
        transform: translateY(-3px);
        box-shadow: ${softShadow};

        .preview {
            transform: scale(1.05);
        }
    }
`;

export const Headline = styled(Paragraph)`
    background: #ffca00;
    padding: 0.5rem 1rem;
    display: inline-block;
    border-radius: 3px;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 20rem;
    overflow: hidden;
    border-radius: 6px;
    margin-bottom: 1rem;
`;

export const Image = styled.div`
    background: ${(props) => `url(${props.src})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    transition: 500ms;
`;

export const Info = styled.div`
    width: 100%;
    color: black;
`;

export const Badge = styled(Paragraph)`
    box-shadow: ${shadow};
    border-radius: ${borderRadius.round};
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    margin: 0.5rem;
`;

export const Flex = styled.div`
    display: flex;
    flex-wrap: ${(props) => props.flexWrap};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    margin: ${(props) => props.margin};
`;

export const Thumb = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    border: 3px solid;
    border-radius: 3px;
    overflow: hidden;
    margin-left: 0.125rem;
    border-color: ${(props) => (props.isActive ? "#ffca00" : "transparent")};
    transition: ${transition};
`;
