import Card from "components/Layout/Card";

import GlobalStyle from "styles/global";

import { portfolioData } from "lang/global";
import Header from "components/Layout/Header";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Header />

            {portfolioData.map((item, index) => {
                return (
                    <Card
                        index={index}
                        key={item.headline}
                        badges={item.badges}
                        image={item.image}
                        link={item.link}
                        headline={item.headline}
                        text={item.text}
                    />
                );
            })}
        </div>
    );
}

export default App;
