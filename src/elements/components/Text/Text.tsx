import type { CSSProperties, ReactNode } from "react";

import { StyledText } from "./Text.styles";

interface TextProps {
    bold?: boolean;
    children?: ReactNode;
    className?: string;
    color?: string;
    fontSize?: string;
    id?: string;
    margin?: string;
    textAlign?: CSSProperties["textAlign"];
    toUpperCase?: boolean;
}

const Text = ({
    bold,
    children,
    className,
    color,
    fontSize = "0.875rem",
    id,
    margin = "0",
    textAlign,
    toUpperCase = false,
}: TextProps) => (
    <StyledText
        $bold={bold}
        className={className}
        $color={color}
        $fontSize={fontSize}
        id={id}
        $margin={margin}
        $textAlign={textAlign}
        $toUpperCase={toUpperCase}
    >
        {children}
    </StyledText>
);

export default Text;
