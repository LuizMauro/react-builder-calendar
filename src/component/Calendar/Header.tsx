import React from "react";
import * as Styled from "./styles";
// import "./styles.css";

interface IProps {
  value: any;
  setValue(value: any): void;
}

const Header: React.FC<IProps> = ({ value, setValue }) => {
  const currentMonthName = (): any => {
    return value.format("MMM");
  };

  const currentYear = () => {
    return value.format("YYYY");
  };

  const prevMonth = () => {
    return value.clone().subtract(1, "month");
  };

  const nextMonth = () => {
    return value.clone().add(1, "month");
  };

  const thisMonth = () => {
    return value.isSame(new Date(), "month");
  };

  return (
    <Styled.Header>
      <Styled.Previous
        className="previous"
        onClick={() => !thisMonth() && setValue(prevMonth())}
      >
        {!thisMonth() ? String.fromCharCode(171) : null}
      </Styled.Previous>
      <div className="current">
        {currentMonthName()} {currentYear()}
      </div>
      <Styled.Next className="next" onClick={() => setValue(nextMonth())}>
        {String.fromCharCode(187)}
      </Styled.Next>
    </Styled.Header>
  );
};

export default Header;
