import React from "react";
import logo from "../../assets/logo.svg";
import { StyledAppHeader } from "../AppHeader.styled";
import { expenses } from "../../data";

const totalAmount = expenses.reduce((sum, obj) => sum + obj.amount, 0);

const AppHeader = () => {
  return (
    <StyledAppHeader>
      <div className="balance">
        <h2 className="balance__title">My Balance</h2>
        <p className="balance__amount">${totalAmount}</p>
      </div>
      <img src={logo} alt="app logo" />
    </StyledAppHeader>
  );
};

export default AppHeader;
