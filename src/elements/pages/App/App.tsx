import GlobalStyle from "styles/global";
import Header from "elements/layout/Header/Header";
import { Main } from "./App.styles";
import CardList from "elements/layout/CardList/CardList";
import { projectData } from "data/projectData";

const App = () => (
    <>
        <GlobalStyle />

        <Main>
            <Header />

            <CardList list={projectData} />
        </Main>
    </>
);

export default App;
