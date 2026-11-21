import type { ComponentProps, ReactNode } from "react";

import { StyledLink } from "./Link.styles";

interface LinkProps extends ComponentProps<"a"> {
    children: ReactNode;
    href: string;
    underline?: boolean;
}

const Link = ({ target, underline = true, ...props }: LinkProps) => (
    <StyledLink
        // Without an explicit tabIndex, Safari does not focus links via Tab
        tabIndex={0}
        {...props}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        $underline={underline}
    />
);

export default Link;
