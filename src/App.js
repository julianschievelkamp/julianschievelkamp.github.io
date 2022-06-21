import Card from "components/Layout/Card";

import GlobalStyle from "styles/global";

import { artData, appData } from "lang/global";

function App() {
    return (
        <div className="App">
            <GlobalStyle />

            {artData.map((item) => {
                return (
                    <Card
                        key={item.headline}
                        badges={item.badges}
                        image={item.image}
                        link={item.link}
                        headline={item.headline}
                        text={item.text}
                    />
                );
            })}

            {appData.map((item) => {
                return (
                    <Card
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
