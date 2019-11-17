import styled, { css } from 'styled-components';

export const StyledPickOrderDisplay = styled.div(({ theme, ...props}) => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`)

export const Header = styled.div`
  display: flex;
  div {
    font-size: 28px;
    margin: 10px;
  }
`

export const NumberInput = styled.input`
  width: 50px;
  border-radius: 4px;
  border: 1px solid grey;
  padding: 0 5px;
  margin-left: 5px;
`

export const Table = styled.div(({ theme }) => css`

`)

export const Row = styled.div(({ theme, even }) => css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${even ? theme.veryLight : 'none'};
  border-radius: 4px;

  &:hover {
    background: ${theme.highlight};
  }
`)

export const Cell = styled.div(({ theme, wide }) => css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${wide ? '260px' : '170px'};
  height: 27px;
  padding: 5px 20px;

  :last-child {
    width: 110px;
  }
`)