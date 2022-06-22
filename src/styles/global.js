import { createGlobalStyle } from "styled-components";

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
        padding: 2rem;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;
