import styled from "styled-components";

import Button from "elements/components/Button/Button";
import { queries } from "styles/variables";

export const StyledPreviews = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    @media ${queries.sm} {
        min-width: 10rem;
        max-width: 10rem;
    }
`;

export const PreviewButtons = styled.div`
    display: flex;
    gap: 0.25rem;
`;

export const PreviewButton = styled(Button)<{ $isActive: boolean }>`
    display: inline-flex;
    aspect-ratio: 1/1;
    flex: 1;

    img {
        opacity: ${({ $isActive }) => ($isActive ? 1 : 0.5)};
    }

    &:focus-visible img {
        opacity: 1;
    }

    @media ${queries.hover} {
        &:hover img {
            opacity: 1;
        }
    }
`;
