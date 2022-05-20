import React from "react";
import logo from "../../assets/logo.svg";
import { StyledAppHeader } from "../AppHeader.styled";

const AppHeader = () => {
  return (
    <StyledAppHeader>
      <div className="balance">
        <h2>My Balance</h2>
        <p>$921.48</p>
      </div>
      <img src={logo} alt="app logo" />
    </StyledAppHeader>
  );
};

export default AppHeader;
