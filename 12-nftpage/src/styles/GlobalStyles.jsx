import { createGlobalStyle } from "styled-components";
import "@fontsource/sora";
import "@fontsource/akaya-telivigala";
export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;

    }
    body{
        font-family: 'Sora', sans-serif;
        overflow-x:hidden;
        
    }
    h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
a{
    color: inherit;
    text-decoration:none;
}
`;
