import styled from "styled-components";
import Text from "elements/components/Text/Text";
import { borderRadius } from "styles/variables";

export const StyledTools = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const Tool = styled(Text)`
    background: whitesmoke;
    border-radius: ${borderRadius.round};
    padding: 0.5rem 1rem;
    border: 1px solid lightgrey;
`;
