import styled from "styled-components";

export const StyledParagraph = styled.p`
    text-align: ${(props) => props.textAlign};
    font-weight: ${(props) => (props.bold ? "bold" : "normal")};
    line-height: 1.5;
    font-size: 1rem;
    margin: ${(props) => props.margin};
`;
