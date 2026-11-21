import Text from "elements/components/Text/Text";
import { StyledHeader } from "./Header.styles";
import { languageData } from "data/languageData";

const Header = () => (
    <StyledHeader>
        <Text>{languageData.header}</Text>
    </StyledHeader>
);

export default Header;
