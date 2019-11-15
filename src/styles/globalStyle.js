import {
  createGlobalStyle
} from 'styled-components';

const GlobalStyle = createGlobalStyle `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;

  h1 {
    font-size: 28px;
    text-align: center;
  }

  h2 {
    font-size: 20px;
  }
  
  &:focus {
    outline: 0;
  }
}
`

export default GlobalStyle;