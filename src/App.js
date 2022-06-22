import Card from "components/Layout/Card";

import GlobalStyle from "styles/global";

import { portfolioData } from "lang/global";
import Sidebar from "components/Layout/Sidebar";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Sidebar />

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
