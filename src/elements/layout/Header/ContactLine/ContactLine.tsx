import Link from "elements/components/Link/Link";
import { icons } from "elements/components/Icon/icons";

import { ContactIcon, StyledContactLine } from "./ContactLine.styles";

type ContactLineProps = {
    icon: string;
    label: string;
    url: string;
};

const ContactLine = ({ icon, label, url }: ContactLineProps) => (
    <StyledContactLine>
        <ContactIcon name={icon as keyof typeof icons} />
        <Link href={url} target="_blank">
            {label}
        </Link>
    </StyledContactLine>
);

export default ContactLine;
