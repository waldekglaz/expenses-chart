import React from "react";
import { StyledChart } from "./Chart.styled";
import { expenses } from "../../data";
import { useState } from "react";
const Chart = () => {
  const [isActive, setIsActive] = useState(false);
  const clickHandler = (e) => {
    setIsActive((current) => !current);
  };
  return (
    <StyledChart>
      {expenses.map((data, key) => {
        return (
          <div key={key} className="chart-bar">
            <div className={isActive ? "amount visible" : "amount"}>
              ${data.amount}
            </div>
            <div
              style={{
                height: data.amount * 3 + "px",
                backgroundColor: data.amount > 51 ? "#76B5BC" : "#ec755d",
              }}
              className="column"
              data-expense={data.amount}
              onClick={clickHandler}
            ></div>
            <div className="day">{data.day}</div>
          </div>
        );
      })}
    </StyledChart>
  );
};

export default Chart;
