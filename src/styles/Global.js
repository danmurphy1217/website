import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        background-color: #E6E6E6;
    }


    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
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

    .book-imgs:hover {
            animation: shake 0.5s;
            animation-iteration-count: 1;
          }
    
    #icon-children>* {
        flex: 1 1 33.33%;
    }

          
    @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(-1deg); }
    }
`;

const Container = styled.div`
  position: relative;
`;

export default Container;
