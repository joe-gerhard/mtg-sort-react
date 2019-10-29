import styled, { css } from 'styled-components';

export const StyledCardDisplay = styled.div(({theme, ...props}) => css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`)