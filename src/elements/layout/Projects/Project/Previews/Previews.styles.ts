import Button from "elements/components/Button/Button";
import styled from "styled-components";
import { queries } from "styles/variables";

export const StyledPreviews = styled.div``;

export const ThumbsWrapper = styled.div`
    display: flex;
    gap: 0.25rem;
`;

export const Thumb = styled(Button)<{ $isActive: boolean }>`
    width: 3rem;
    height: 3rem;
    overflow: clip;

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
