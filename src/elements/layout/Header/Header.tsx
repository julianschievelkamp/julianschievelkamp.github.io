import { StyledHeader, StyledText } from "./Header.styles";
import { languageData } from "data/languageData";
import Link from "elements/components/Link/Link";
import Headline from "elements/components/Headline/Headline";
import { colors } from "styles/variables";
import Icon from "elements/components/Icon/Icon";

const Header = () => (
    <StyledHeader>
        <Headline>{languageData.header.title}</Headline>

        <StyledText color={colors.secondary} margin="1rem 0 0 0">
            <Icon name="mail" margin="0 0.25rem 0 0" />
            <Link href={`mailto:${languageData.header.mail}`}>
                {languageData.header.mail}
            </Link>
        </StyledText>

        <StyledText color={colors.secondary}>
            <Icon name="link" margin="0 0.25rem 0 0" />
            <Link href={`https://${languageData.header.git}`} target="_blank">
                {languageData.header.git}
            </Link>
        </StyledText>
    </StyledHeader>
);

export default Header;
