import { createGlobalStyle } from "styled-components";
import { queries } from "styles/variables";
import fonts from "./fonts";

export default createGlobalStyle`
    ${fonts};

    * {
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        -webkit-tap-highlight-color: transparent;
    }

    html, body {
        margin: 0;
        padding: 0;
        font-size: 100%;
        background-color: whitesmoke;

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

        @media ${queries.lg} {
            padding: 2rem;
        }

        @media ${queries.xxl} {
            padding-bottom: 4rem;
        }
    }

    .card-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
        padding-top: 1rem;

        @media ${queries.lg} {
            grid-template-columns: 1fr 1fr;
            grid-gap: 2rem;
        }

        @media ${queries.xxl} {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    a {
        color: black;
    
        &:hover {
            color: #ffca00;
        }
    }
`;
