import type { ReactNode } from "react";

import { H1, H2 } from "./Headline.styles";

const headlines = {
    h1: H1,
    h2: H2,
};

interface HeadlineProps {
    children?: ReactNode;
    type?: "h1" | "h2";
}

const Headline = ({ children, type = "h1" }: HeadlineProps) => {
    const HeadlineComponent = headlines[type];

    return <HeadlineComponent>{children}</HeadlineComponent>;
};

export default Headline;
