import styled, {
  css
} from 'styled-components';

export const StyledSignInOptions = styled.div(({
  theme,
  ...props
}) => css `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`);

const Button = styled.button`
  width: 300px;
  height: 70px;
  background: grey;
  border: 3px solid white;
  border-radius: 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: border-color .4s;
  color: white;

  &:hover {
    cursor: pointer;
    border-color: transparent;
  }

  img {
    width: 50px;
    filter: invert();
    margin: 0 20px;
  }
`


export const GoogleButton = styled(Button)`
  background: #D34F3E;

  &:hover {
    background: #D34F3E;
  }
`

export const FacebookButton = styled(Button)`
  background: #4765A8;

  &:hover {
    background: #4765A8;
  }
`

export const TwitterButton = styled(Button)`
  background: #6BACE9;

  &:hover {
    background: #6BACE9;
  }
`