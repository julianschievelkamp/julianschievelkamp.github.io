import type { ProjectData } from "data/projectData";
import { StyledCardList } from "./CardList.styles";
import Card from "./Card/Card";

interface CardListProps {
    list: ProjectData[];
}

const CardList = ({ list }: CardListProps) => {
    return (
        <StyledCardList>
            {list.map((project, index) => (
                <Card key={project.title} project={project} index={index} />
            ))}
        </StyledCardList>
    );
};

export default CardList;
