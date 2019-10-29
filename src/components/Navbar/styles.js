import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.nav(({
  theme,
  ...props
}) => css `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${theme.dark};
  color: ${theme.light};
  height: 44px;
  padding: 0 10vw;
`)

export const StyledLink = styled(Link)(({theme, ...props}) => css`
  color: ${theme.light};
  text-decoration: none;
  margin: 0 20px;

  &:last-child {
    margin-left: auto;
  }
`)