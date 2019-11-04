import React from "react";
import { StyledNavbar, StyledLink, StyledButton } from "./styles";

const Navbar = ({ user, signOut, signInWithGoogle }) => {
  return (
    <StyledNavbar>
      <StyledLink to="/filter">Filter</StyledLink>
      {
        user 
          && <StyledLink to="/profile">Profile</StyledLink>
      }
      {
        user
          ? <StyledButton onClick={signOut}>Sign Out</StyledButton>
          : <StyledButton onClick={signInWithGoogle}>Sign In</StyledButton>
      }
    </StyledNavbar>
  );
};

export default Navbar;
