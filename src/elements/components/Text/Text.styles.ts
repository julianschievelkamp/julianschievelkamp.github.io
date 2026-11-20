import { styled } from "styled-components";
import type { CSSProperties } from "react";
import { transition } from "styles/variables";

export const StyledText = styled.p<{
    $color?: string;
    $bold?: boolean;
    $textAlign?: CSSProperties["textAlign"];
    $margin?: string;
    $fontSize?: string;
    $toUpperCase?: boolean;
}>`
    text-align: ${({ $textAlign }) => $textAlign};
    font-weight: ${({ $bold }) => ($bold ? "bold" : "normal")};
    font-size: ${({ $fontSize }) => $fontSize};
    margin: ${({ $margin }) => $margin};
    color: ${({ $color }) => $color ?? "black"};
    text-transform: ${({ $toUpperCase }) =>
        $toUpperCase ? "uppercase" : "none"};
    line-height: 1.5;
    transition: color ${transition};
    font-family: "Poppins", sans-serif;
`;
