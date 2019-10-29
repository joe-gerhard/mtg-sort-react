import React from "react";
import { StyledNavbar, StyledLink } from "./styles";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/filter">Filter</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </StyledNavbar>
  );
};

export default Navbar;
