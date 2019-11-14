import React from "react";
import { StyledNavbar, StyledLink, StyledButton } from "./styles";

const Navbar = ({user, handleLogout}) => {
  return (
    <StyledNavbar>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/filter">Filter</StyledLink>
      {user 
        ? <StyledButton onClick={handleLogout} marginleft='auto'>Logout</StyledButton>
        : <StyledLink to='/login' marginleft='auto'>Login</StyledLink>
      }
      {user
        ? <StyledLink to='/profile'>Profile</StyledLink>
        : null
      }
    </StyledNavbar>
  );
};

export default Navbar;
