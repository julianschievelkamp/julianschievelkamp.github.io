import { styled } from "styled-components";
import { queries } from "styles/variables";

export const Main = styled.main`
    padding: 1rem;

    @media ${queries.lg} {
        padding: 2rem;
    }

    a {
        color: black;

        &:hover {
            color: #ffca00;
        }
    }
`;
