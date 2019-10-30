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
  
  &:focus {
    outline: 0;
  }
}
`

export default GlobalStyle;