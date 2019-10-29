import styled, { css } from 'styled-components';

export const StyledFilterBar = styled.div(({theme, ...props}) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0,0,0,1), rgba(204, 220, 255, 0.205)), url('http://www.visualizingmagic.com/wp-content/uploads/2016/01/grunge-texture-iii_1697602.jpg');
  color: ${theme.light};
  height: 44px;
`)

