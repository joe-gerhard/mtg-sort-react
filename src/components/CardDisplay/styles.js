import styled, { css } from 'styled-components';

export const StyledCardDisplay = styled.div(({theme, ...props}) => css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: .5vw;
  
  .card-enter {
    opacity: 0;
    width: 0px;
    margin: .5vw 0px;
    object-fit: fill;
  }

  .card-enter-active {
    opacity: 1;
    transition: all .4s;
    width: 15vw;
    object-fit: fill;
    margin: .5vw;
  }

  .card-exit {
    opacity: 1;
    width: 15vw;
    object-fit: fill;
    margin: .5vw;
  }

  .card-exit-active {
    opacity: 0;
    transition: all .4s;
    width: 0px;
    object-fit: fill;
    margin: .5vw 0;
  }
`)

export const StyledImg = styled.img(({theme, ...props}) => css`
  margin: .5vw;
  height: 20vw;
  width: 15vw;
  filter: drop-shadow(.3vw .3vw .2vw rgba(17, 25, 58, 0.8));
  object-fit: fill;
`)