import styled, { css } from 'styled-components';

export const StyledProfilePage = styled.div(({theme, ...props}) => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`)

export const Table = styled.div(({ theme }) => css`
  border: 1px solid ${theme.dark};
  border-radius: 10px;
  overflow: hidden;
`)

export const Row = styled.div(({ theme, head }) => css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid ${theme.dark};
  background: ${head ? theme.medium : 'none'};
  color: ${ head ? theme.light : theme.dark};

  &:last-child {
    border-bottom: none;
  }
`)

export const Cell = styled.div(({ theme, wide }) => css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${wide ? '300px' : '200px'};
  height: 30px;
  padding: 5px 20px;

  &:last-child {
    border-right: none
  }
`)

export const Button = styled.button(({ theme }) => css`
  border: 1px solid ${theme.medium};
  background: ${theme.primaryDark};
  height: 20px;
  width: 200px;
  border-radius: 4px;
  transition: background .4s;

  &:hover {
    cursor: pointer;
    background: ${theme.primary};
  }
`)