import GlobalStyle from "styles/global";
import Header from "elements/layout/Header/Header";
import { Main } from "./App.styles";
import Projects from "elements/layout/Projects/Projects";

const App = () => (
    <>
        <GlobalStyle />

        <Main>
            <Header />

            <Projects />
        </Main>
    </>
);

export default App;
