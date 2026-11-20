import Card from "elements/layout/Card/Card";
import GlobalStyle from "styles/global";
import { portfolioData } from "data/portfolioData";
import Header from "elements/layout/Header/Header";
import { CardWrapper, Main } from "./App.styles";

const App = () => (
    <>
        <GlobalStyle />

        <Main>
            <Header />

            <CardWrapper>
                {portfolioData.map((item, index) => (
                    <Card index={index} key={item.headline} item={item} />
                ))}
            </CardWrapper>
        </Main>
    </>
);

export default App;
