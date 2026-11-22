import { styled } from "styled-components";

import { colors, transition } from "styles/variables";

const ICON_SIZE = "1rem";

export const StyledIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${ICON_SIZE};
    height: ${ICON_SIZE};
    min-width: ${ICON_SIZE};
    min-height: ${ICON_SIZE};
    max-width: 100%;
    max-height: 100%;

    svg {
        transition: fill ${transition.default};
        fill: ${colors.secondary};
        width: ${ICON_SIZE};
        height: ${ICON_SIZE};
    }
`;
