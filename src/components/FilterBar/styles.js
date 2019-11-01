import styled, {
  css
} from 'styled-components';

export const StyledFilterBar = styled.div(({
  theme
}) => css `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0,0,0,1), rgba(204, 220, 255, 0.205)), url('http://www.visualizingmagic.com/wp-content/uploads/2016/01/grunge-texture-iii_1697602.jpg');
  color: ${theme.light};
  height: 100px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`)

export const Icon = styled.img(({
  theme,
  selected
}) => css `
  width: 30px;
  margin: 0 1px;
  margin-top: 5px;
  object-fit: scale-down;
  filter: opacity(${selected ? '40%' : '100%'});
  transition: all .3s;
`)

export const Button = styled.button(({
  theme,
  selected
}) => css `
  background: transparent;
  border: 1px solid ${theme.light};
  border-radius: 5px;
  color: ${theme.light};
  padding: 0 5px;
  margin: 5px .25vw;
  opacity: ${selected ? .4 : 1};
  transition: opacity .3s;
`)