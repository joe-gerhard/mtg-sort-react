import React from "react";
import { StyledNavbar, StyledLink } from "./styles";

const Navbar = (props) => {
  return (
    <StyledNavbar>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/filter">Filter</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </StyledNavbar>
  );
};

export default Navbar;
