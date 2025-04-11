import styled from "styled-components";

export const StyledParagraph = styled.p<{
    textAlign: string;
    bold: boolean;
    margin: string;
}>`
    text-align: ${(props) => props.textAlign};
    font-weight: ${(props) => (props.bold ? "bold" : "normal")};
    line-height: 1.5;
    font-size: 0.875rem;
    margin: ${(props) => props.margin};
`;
