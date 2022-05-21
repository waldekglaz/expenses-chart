import React from "react";
import { StyledAppBody } from "./AppBody.styled";
import Chart from "./Chart";

const AppBody = () => {
  return (
    <StyledAppBody>
      <h1>Spending - Last 7 days</h1>
      <Chart />
      <div className="divider" />
      <div className="app__footer">
        <div className="total">
          <p className="total-text">Total this month</p>
          <p className="total-amount">$478.33</p>
        </div>
        <div className="last-month">
          <p className="percentage">+2.4%</p>
          <p className="percentage-text">from last month</p>
        </div>
      </div>
    </StyledAppBody>
  );
};

export default AppBody;
