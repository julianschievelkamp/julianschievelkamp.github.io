import { createGlobalStyle } from "styled-components";
import { queries } from "styles/variables";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        -webkit-tap-highlight-color: transparent;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    .App {
        min-height: 100vh;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media ${queries.lg} {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-around;
            overflow: hidden;
        }
    }
`;
