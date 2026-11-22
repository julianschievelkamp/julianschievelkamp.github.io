import styled from "styled-components";

import Icon from "elements/components/Icon/Icon";
import Text from "elements/components/Text/Text";
import { colors } from "styles/variables";

export const StyledContactLine = styled(Text)`
    display: flex;
    align-items: center;
    color: ${colors.secondary};
`;

export const ContactIcon = styled(Icon)`
    margin-right: 0.25rem;
`;
