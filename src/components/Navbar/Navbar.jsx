import React from "react";
import { NavLink } from "react-router-dom";
import FlexNav from "./FlexNavbar";
import StyledNavbar from "./StyledNavbar";

export default function Navbar() {
  return (
    <StyledNavbar>
      <h2>Logo</h2>
      <FlexNav>
        <NavLink exact to="/" className="link">
          Home
        </NavLink>
        <NavLink exact to="/about" className="link">
          About
        </NavLink>
        <NavLink exact to="/portfolio" className="link">
          Portfolio
        </NavLink>
      </FlexNav>
    </StyledNavbar>
  );
}
