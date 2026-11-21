import { StyledIcon } from "./Icon.styles";
import { icons } from "./icons";

interface IconProps {
    className?: string;
    name: keyof typeof icons;
}

const Icon = ({ className, name }: IconProps) => {
    const SvgIcon = icons[name];

    return (
        <StyledIcon className={className}>
            <SvgIcon aria-hidden="true" />
        </StyledIcon>
    );
};

export default Icon;
