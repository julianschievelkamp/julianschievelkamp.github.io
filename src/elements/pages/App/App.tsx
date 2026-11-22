import Header from "elements/layout/Header/Header";
import ProjectList from "elements/layout/ProjectList/ProjectList";
import GlobalStyle from "styles/global";

import { Main } from "./App.styles";

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
