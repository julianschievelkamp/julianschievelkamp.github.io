import { languageData } from "data/languageData";
import Headline from "elements/components/Headline/Headline";

import ContactLine from "./ContactLine/ContactLine";
import { Contact, StyledHeader } from "./Header.styles";

const { title, links, impressum } = languageData.header;

const Header = () => (
    <StyledHeader>
        <Headline>{title}</Headline>

        <Contact>
            <div>
                {links.map(({ icon, label, url }) => (
                    <ContactLine
                        key={label}
                        icon={icon}
                        label={label}
                        url={url}
                    />
                ))}
            </div>

            <ContactLine
                icon={impressum.icon}
                label={impressum.label}
                url={impressum.url}
            />
        </Contact>
    </StyledHeader>
);

export default Header;
