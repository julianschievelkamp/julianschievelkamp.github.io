import { createGlobalStyle } from "styled-components";
import { queries } from "styles/variables";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Segoe UI", Arial, sans-serif;
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

        font-size: 100%;

        @media ${queries.xl} {
            font-size: 125%;
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
        /* max-width: 1500px; */

        @media ${queries.lg} {
            padding-bottom: 2rem;
        }
    }

    .card-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media ${queries.xxl} {
            flex-direction: row;
            align-items: stretch;
            justify-content: space-around;
        }
    }
`;
