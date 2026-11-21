import GlobalStyle from "styles/global";
import Header from "elements/layout/Header/Header";
import { Main } from "./App.styles";
import CardList from "elements/layout/CardList/CardList";

const App = () => (
    <>
        <GlobalStyle />

        <Main>
            <Header />

            <CardList />
        </Main>
    </>
);

export default App;
