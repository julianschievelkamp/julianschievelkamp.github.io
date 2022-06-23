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
                return <Card index={index} key={item.headline} item={item} />;
            })}
        </div>
    );
}

export default App;
