import { StyledCardList } from "./CardList.styles";
import Card from "./Card/Card";
import { projectData } from "data/projectData";

const CardList = () => {
    return (
        <StyledCardList>
            {projectData.map((project, index) => (
                <Card key={project.title} project={project} index={index} />
            ))}
        </StyledCardList>
    );
};

export default CardList;
