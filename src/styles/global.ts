import { createGlobalStyle } from "styled-components";
import { queries } from "styles/variables";
import fonts from "./fonts";

export default createGlobalStyle`
    ${fonts};

    * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    html, body {
        margin: 0;
        padding: 0;
        font-size: 100%;
        position: relative;
        overflow-x: clip;

        // scroll fix for card fade in
        @media ${queries.lg} {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }

    body {
        overflow-y: scroll;
        background-color: whitesmoke;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100svh;
    }

    a {
        color: black;
    
        &:hover {
            color: #ffca00;
        }
    }
`;
