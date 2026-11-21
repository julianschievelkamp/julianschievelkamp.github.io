import { StyledIcon } from "./Icon.styles";
import { icons } from "./icons";

interface IconProps {
    color?: string;
    margin?: string;
    name: keyof typeof icons;
    padding?: string;
    size?: string;
}

const Icon = ({ color, margin, name, padding, size = "1rem" }: IconProps) => {
    const Icon = icons[name];

    return (
        <StyledIcon
            $color={color}
            $margin={margin}
            $padding={padding}
            $size={size}
        >
            <Icon aria-hidden="true" />
        </StyledIcon>
    );
};

export default Icon;
