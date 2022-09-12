import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track{
            background: white;
        }
    }

    body {
            font-family: sans-serif;
            width: 100%
        }

    h2 {
            font-size: 3rem;
            font-family: cursive;
            font-weight: lighter;
            color: #333;
        }

    h3 {
            font-size: 1 rem;
            color: #333;
            padding: 1.5rem 0rem;
        }

    p {
            font-size: 0.8 rem;
            line-height: 20px;
            color: #696969;
        }

    a  (
            tex-decoration: none;
            color: #333;
        )

    
`;

export default GlobalStyles;