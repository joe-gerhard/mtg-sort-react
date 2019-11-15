import styled, { css } from 'styled-components';

export const StyledDeleteButton = styled.button(({ theme, ...props}) => css`
  background: #cc341d;
  width: 80px;
  height: 20px;
  border: none;
  border-radius: 4px;
  color: white;
`)