import styled, { css } from 'styled-components';

export const StyledCardDisplay = styled.div(({theme, ...props}) => css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: .5vw;
`)

export const StyledImg = styled.img(({theme, ...props}) => css`
  margin: .5vw;
  width: 15vw;
  object-fit: scale-down;
  filter: drop-shadow(.3vw .3vw .2vw rgba(17, 25, 58, 0.8));
`)