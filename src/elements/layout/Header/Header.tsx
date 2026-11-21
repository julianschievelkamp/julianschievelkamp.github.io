import Text from "elements/components/Text/Text";
import { StyledHeader } from "./Header.styles";
import { languageData } from "data/languageData";
import Link from "elements/components/Link/Link";
import Headline from "elements/components/Headline/Headline";
import { colors } from "styles/variables";

const Header = () => (
    <StyledHeader>
        <Headline>{languageData.header.title}</Headline>
        <Text color={colors.secondary}>
            <Link href={`mailto:${languageData.header.mail}`}>
                {languageData.header.mail}
            </Link>
            <br />
            <Link href={languageData.header.git} target="_blank">
                {languageData.header.git}
            </Link>
        </Text>
    </StyledHeader>
);

export default Header;
