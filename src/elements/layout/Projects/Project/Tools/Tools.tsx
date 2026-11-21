import { StyledTools, Tool } from "./Tools.styles";

interface ToolsProps {
    tools: string[];
}

const Tools = ({ tools }: ToolsProps) => {
    return (
        <StyledTools>
            {tools.map((tool) => (
                <Tool key={tool}>{tool}</Tool>
            ))}
        </StyledTools>
    );
};

export default Tools;
