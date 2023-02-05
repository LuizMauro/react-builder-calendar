import React, { useState, useEffect } from "react";
import * as Styled from "./styles";
import "moment/locale/pt-BR";

import Header from "./Header";
import { dayStyles, beforeToday } from "./styles";
import "./styles.css";

import { buildCalendar } from "./builder";

interface IProps {
  value: any;
  onChange: (value: any) => void;
}

const Calendar: React.FC<IProps> = ({ value, onChange }) => {
  const [calendar, setCalendar] = useState<any[]>([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <Styled.Calendar className="calendar">
      <Header value={value} setValue={onChange} />
      <Styled.Body>
        <Styled.DayNames>
          {["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => (
            <Styled.Week key={i}>{d}</Styled.Week>
          ))}
        </Styled.DayNames>
      </Styled.Body>

      {calendar.map((week) => (
        <Styled.WeekDiv key={week}>
          {week.map((day: any) => (
            <Styled.Day
              key={day}
              onClick={() => !beforeToday(day) && onChange(day)}
            >
              <Styled.DayDiv state={dayStyles(day, value)}>
                {day.format("D").toString()}
              </Styled.DayDiv>
            </Styled.Day>
          ))}
        </Styled.WeekDiv>
      ))}
    </Styled.Calendar>
  );
};

export { Calendar };
