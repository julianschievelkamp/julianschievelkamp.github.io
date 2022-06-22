import styled, { keyframes } from "styled-components";

import Paragraph from "components/Elements/Paragraph";

import { borderRadius, shadow, queries } from "styles/variables";

const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(10rem); }
    100% { opacity: 1;  transform: translateY(0);}
`;

export const Link = styled.a`
    width: 100%;
    max-width: 50rem;
    margin-bottom: 2rem;
    text-decoration: none;
`;

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-shadow: ${shadow};
    border-radius: ${borderRadius.edged};
    padding: 1rem;
    opacity: 0;

    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-delay: ${(props) => `${props.position * 0.2}s`};

    &:hover {
        .image {
            transform: scale(1.1);
        }
    }

    @media ${queries.md} {
        flex-direction: row;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 10rem;
    overflow: hidden;
    border-radius: 6px;
    margin-right: 1rem;
    margin-bottom: 1rem;

    @media ${queries.md} {
        width: 50%;
        height: unset;
        margin-bottom: 0;
    }
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

    @media ${queries.md} {
        width: 50%;
    }
`;

export const Badge = styled(Paragraph)`
    box-shadow: ${shadow};
    border-radius: ${borderRadius.round};
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    margin: 0.5rem;
`;

export const BadgeWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
