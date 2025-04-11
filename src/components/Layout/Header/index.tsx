import Paragraph from "components/Elements/Paragraph";

import { StyledHeader, Divider, Flex } from "./styles";

const Header = () => {
    return (
        <StyledHeader>
            <Flex>
                <Paragraph>
                    <strong>Projects</strong> // mail@julianschievelkamp.com
                </Paragraph>
            </Flex>

            <Divider />
        </StyledHeader>
    );
};

export default Header;
