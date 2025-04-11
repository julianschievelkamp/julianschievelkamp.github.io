import Paragraph from "components/Elements/Paragraph";

import { StyledHeader, Divider, Flex } from "./styles";

const Header = () => {
    return (
        <StyledHeader>
            <Flex>
                <Paragraph>
                    <strong>Projects</strong> //{" "}
                    <a href="mailto:mail@julianschievelkamp.com">
                        mail@julianschievelkamp.com
                    </a>
                </Paragraph>
            </Flex>

            <Divider />
        </StyledHeader>
    );
};

export default Header;
