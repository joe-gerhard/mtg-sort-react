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
  border: none;
  border-radius: 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 50px;
    filter: invert();
    margin: 0 20px;
  }
`


export const GoogleButton = styled(Button)`
  background: #D34F3E;
  color: white;
`

export const FacebookButton = styled(Button)`
  background: #4765A8;
  color: white;
`

export const TwitterButton = styled(Button)`
  background: #6BACE9;
  color: white;
`