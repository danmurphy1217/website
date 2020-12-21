import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        background-color: #52525250;
    }


    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
  

    html {
        // no scroll
        overflow-x : hidden;
        // take into account both padding and border in total width/height 
        box-sizing: border-box;
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    .svg-transform {
        transition: transform 0.5s ease-in;
    }

    .svg-transform:hover {
        transform: rotate(360deg);
    }

    .svg-transform > g > text {
        transition: fill 1s ease-in;
    }
`;


const Container = styled.div`
    position: relative;
    min-height: 100vh;
`;

export default Container;