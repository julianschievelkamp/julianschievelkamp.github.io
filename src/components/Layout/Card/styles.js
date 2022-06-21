import styled, { keyframes } from "styled-components";

import Paragraph from "components/Elements/Paragraph";

import { borderRadius, shadow } from "styles/variables";

const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

export const StyledCard = styled.a`
    display: flex;
    margin: 2rem;
    width: 50%;
    text-decoration: none;
    box-shadow: ${shadow};
    border-radius: ${borderRadius.edged};
    padding: 1rem;

    animation-name: ${fadeIn};
    animation-duration: 1s;

    &:hover {
        .image {
            transform: scale(1.1);
        }
    }
`;

export const ImageWrapper = styled.div`
    width: 50%;
    overflow: hidden;
    border-radius: 10px;
    margin-right: 1rem;
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
    width: 50%;
    color: black;
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
