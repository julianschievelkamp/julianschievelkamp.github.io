import { languageData } from "data/languageData";
import Headline from "elements/components/Headline/Headline";
import Link from "elements/components/Link/Link";

import { ContactIcon, ContactLine, StyledHeader } from "./Header.styles";

const { title, mail, git } = languageData.header;

const Header = () => (
    <StyledHeader>
        <Headline>{title}</Headline>

        <ContactLine>
            <ContactIcon name="mail" />
            <Link href={`mailto:${mail}`}>{mail}</Link>
        </ContactLine>

        <ContactLine>
            <ContactIcon name="link" />
            <Link href={git.url} target="_blank">
                {git.label}
            </Link>
        </ContactLine>
    </StyledHeader>
);

export default Header;
