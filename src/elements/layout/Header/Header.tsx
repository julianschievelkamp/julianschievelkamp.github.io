import { languageData } from "data/languageData";
import Headline from "elements/components/Headline/Headline";
import Link from "elements/components/Link/Link";

import { ContactIcon, ContactLine, StyledHeader } from "./Header.styles";
import { icons } from "elements/components/Icon/icons";

const { title, links } = languageData.header;

const Header = () => (
    <StyledHeader>
        <Headline>{title}</Headline>

        {links.map(({ icon, label, url }) => (
            <ContactLine key={label}>
                <ContactIcon name={icon as keyof typeof icons} />
                <Link href={url} target="_blank">
                    {label}
                </Link>
            </ContactLine>
        ))}
    </StyledHeader>
);

export default Header;
