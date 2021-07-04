import React from "react";
import StyledHeader from "./StyledHeader";
import Logo from "../../assets/svg/logo.svg";

export default function Header() {
  return (
    <StyledHeader>
      <div className="box">
        <img src={Logo} alt="react" />
      </div>
      <div className="box">
        <h2 className="element">Informacion</h2>
      </div>
    </StyledHeader>
  );
}
