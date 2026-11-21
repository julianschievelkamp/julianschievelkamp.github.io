import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";
import { colors } from "./variables";

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
        min-height: 100svh;
        position: relative;
        overflow-x: clip;
    }

    body {
        overflow-y: scroll;
        background-color: whitesmoke;
    }

    :focus-visible {
        outline: 2px solid ${colors.highlight};
    }
`;
