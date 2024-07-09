import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --branco: #FFFFFF;
        --preto: #000000;
        --background-color: #262626;
        --border: 4px solid #2271D1;
        --boxShadow: 0px 5px 29px 0px #2271D1B2;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        text-decoration: none;
        color: var(--branco);
    }

    html, body, #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    body {
        background-color: var(--background-color);
        color: var(--branco);
        line-height: 1;
        font-family: Arial, sans-serif; /* Exemplo de configuração de fonte */
    }

    ol, ul {
        list-style: none;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

export default GlobalStyle;
