import Text from "elements/components/Text/Text";
import { StyledHeader } from "./Header.styles";
import { languageData } from "data/languageData";
import Link from "elements/components/Link/Link";

const Header = () => (
    <StyledHeader>
        <Text>
            {languageData.header.title}

            <Link href={`mailto:${languageData.header.mail}`}>
                {languageData.header.mail}
            </Link>
        </Text>
    </StyledHeader>
);

export default Header;
