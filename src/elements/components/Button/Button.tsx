import type { ComponentProps } from "react";

import { StyledButton } from "./Button.styles";

interface ButtonProps extends ComponentProps<"button"> {
    onClick: () => void;
}

const Button = (props: ButtonProps) => (
    <StyledButton type="button" {...props} />
);

export default Button;
