import { createGlobalStyle } from "styled-components";
import { queries } from "styles/variables";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        /*font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;*/
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        -webkit-tap-highlight-color: transparent;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    .card-wrapper {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1500px;
        margin: 0 auto;

        @media ${queries.lg} {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-around;
        }
    }
`;
