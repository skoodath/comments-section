import { createGlobalStyle } from "styled-components";
import { neutralColor } from "./variable.style";

const GlobalStyle = createGlobalStyle`
* {
    
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  line-height: 1;
  scroll-behavior: smooth;
  font-size: 14px;
  
}

body {
  font-family: 'Rubik', sans-serif;
  background: ${neutralColor.vlightGray};
}
`;

export default GlobalStyle;
