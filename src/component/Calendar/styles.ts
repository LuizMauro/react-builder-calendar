import styled, { css } from "styled-components";

interface IDayStyles {
  state: "before" | "selected" | "today" | "";
}

const BLACK = "rgb(58, 58, 58)";
const LightGreen = "rgb(88, 208, 135)";
const LightGreenTransparent = "rgb(88, 208, 135, 0.8)";
const GREY = "rgb(205, 205, 205)";
const LightBlue = "rgb(102, 193, 255)";

const fontLight = `"AirbnbCerealLight", sans-serif`;
const fontBook = `"AirbnbCerealBook", sans-serif`;
const fontBlack = `"AirbnbCerealBlack", sans-serif`;

export const Calendar = styled.div`
  box-sizing: border-box;
  font-size: 1rem;
  max-width: 900px;
  border: 1px solid ${LightGreen};
`;

export const Body = styled.div`
  border-bottom: 1px solid ${LightGreen};
`;

export const DayNames = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;
`;

export const Week = styled.div`
  background-color: #fff;
  width: calc(100% / 7);
  height: 44px;
  line-height: 44px;
  text-align: center;
  text-transform: uppercase;
  color: ${BLACK};
  font-weight: 400;
`;

export const WeekDiv = styled.div`
  width: 100%;
`;

export const Day = styled.div`
  position: relative;
  width: calc(98% / 7);
  height: 130px;
  display: inline-block;
  background-color: #fff;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  z-index: 1;
  text-align: center;
  margin: 1px;
`;

export const DayDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: ${BLACK};
  z-index: 100;
  line-height: 44px;
  border-radius: 10px;
  cursor: pointer;

  ${({ state }: IDayStyles) => {
    if (state === "before") {
      return css`
        color: ${GREY};
        cursor: not-allowed;
      `;
    }

    if (state === "selected") {
      return css`
        background-color: ${LightGreenTransparent};
        color: #fff;
        font-weight: bold;
      `;
    }

    if (state === "today") {
      return css`
        border: 1px dashed ${LightBlue};
      `;
    }

    return ``;
  }}
`;

export const Header = styled.div`
  background-color: ${LightGreen};
  text-align: center;
  min-height: 2rem;
  line-height: 2rem;
  color: ${BLACK};
  font-family: ${fontBook};
  font-weight: 700;
  display: flex;
`;

export const Previous = styled.div`
  flex: 1;
  text-align: left;
  margin-left: 1rem;
  cursor: pointer;
`;

export const Next = styled.div`
  flex: 1;
  text-align: right;
  margin-right: 1rem;
  cursor: pointer;
`;

export const isSelected = (day: any, value: any) => {
  return value.isSame(day, "day");
};

export const beforeToday = (day: any) => {
  return day.isBefore(new Date(), "day");
};

export const isToday = (day: any) => {
  return day.isSame(new Date(), "day");
};

export const dayStyles = (
  day: any,
  value: any
): "before" | "selected" | "today" | "" => {
  if (beforeToday(day)) return "before";
  if (isSelected(day, value)) return "selected";
  if (isToday(day)) return "today";

  return "";
};
