import Card from "elements/layout/Card/Card";
import GlobalStyle from "styles/global";
import { portfolioData } from "data/global";
import Header from "elements/layout/Header/Header";
import { CardWrapper, Main } from "./App.styles";

function App() {
    return (
        <>
            <GlobalStyle />

            <Main>
                <Header />

                <CardWrapper>
                    {portfolioData.map((item, index) => {
                        return (
                            <Card
                                index={index}
                                key={item.headline}
                                item={item}
                            />
                        );
                    })}
                </CardWrapper>
            </Main>
        </>
    );
}

export default App;
