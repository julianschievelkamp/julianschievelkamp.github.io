import { styled } from "styled-components";

export const StyledImage = styled.img<{
    $height?: string;
    $margin?: string;
    $width?: string;
}>`
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    margin: ${({ $margin }) => $margin};
    max-width: 100%;
    pointer-events: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`;
