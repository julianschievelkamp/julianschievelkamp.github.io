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

        // scroll fix for card fade in
        @media ${queries.lg} {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }

    .App {
        padding: 1rem;
        max-width: 1500px;

        @media ${queries.lg} {
            padding-top: 0;
        }
    }

    .card-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media ${queries.lg} {
            flex-direction: row;
            align-items: stretch;
            justify-content: space-around;
        }
    }
`;
