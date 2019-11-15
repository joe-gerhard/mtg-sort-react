import React from 'react';
import { StyledDeleteButton } from './styles';

const DeleteButton = ({ handleClick, id}) => {
  return (
    <StyledDeleteButton onClick={() => handleClick(id)}>
      DELETE
    </StyledDeleteButton>
  )
}

export default DeleteButton;
