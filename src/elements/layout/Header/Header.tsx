import Text from "elements/components/Text/Text";
import { StyledHeader, Divider, Flex } from "./Header.styles";

const Header = () => (
    <StyledHeader>
        <Flex>
            <Text>
                <strong>Projects</strong> //{" "}
                <a href="mailto:mail@julianschievelkamp.com">
                    mail@julianschievelkamp.com
                </a>
            </Text>
        </Flex>

        <Divider />
    </StyledHeader>
);

export default Header;
