import styled from "styled-components";
import Text from "elements/components/Text/Text";

export const StyledTools = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const Tool = styled(Text)`
    background: whitesmoke;
    padding: 0.5rem 1rem;
    border: 1px solid lightgrey;
`;
