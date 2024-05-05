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
        font-size: 100%;

        // scroll fix for card fade in
        @media ${queries.lg} {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */

            &::-webkit-scrollbar {
                display: none;
            }
        }


        @media ${queries.xl} {
            // font-size: 125%;
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

        @media ${queries.lg} {
            padding-bottom: 2rem;
        }
    }

    .card-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        grid-column-gap: 2rem;

        @media ${queries.lg} {
            grid-template-columns: 1fr 1fr ;
        }

        @media ${queries.xxl} {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`;
