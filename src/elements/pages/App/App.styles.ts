import { styled } from "styled-components";
import { queries } from "styles/variables";

export const Main = styled.main`
    padding: 1rem;

    @media ${queries.md} {
        padding: 2rem;
    }
`;
