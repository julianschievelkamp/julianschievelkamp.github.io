import GlobalStyle from "styles/global";
import Header from "elements/layout/Header/Header";
import { Main } from "./App.styles";
import ProjectList from "elements/layout/ProjectList/ProjectList";

const App = () => (
    <>
        <GlobalStyle />

        <Main>
            <Header />

            <ProjectList />
        </Main>
    </>
);

export default App;
