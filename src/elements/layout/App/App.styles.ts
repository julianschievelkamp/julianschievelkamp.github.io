import { styled } from "styled-components";
import { queries } from "styles/variables";

export const Main = styled.main`
    padding: 1rem;

    @media ${queries.lg} {
        padding: 2rem;
    }

    @media ${queries.xxl} {
        padding-bottom: 4rem;
    }

    a {
        color: black;

        &:hover {
            color: #ffca00;
        }
    }
`;

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    padding-top: 1rem;

    @media ${queries.lg} {
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
    }

    @media ${queries.xxl} {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;
