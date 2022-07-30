import "./App.css";
import { useState } from "react";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { getMonthsFirstDate } from "./utils/dateFunctions";
import { Months } from "./constants";

const App = () => {
  const [firstDateTimestamp, setFirstDateTimestamp] = useState(
    getMonthsFirstDate(new Date())
  );
  const { month, year } = firstDateTimestamp;

  const getPreviousMonth = () => {
    const prevMonth = month === 1 ? 12 : month - 1;
    const prevYear = month === 1 ? year - 1 : year;
    setFirstDateTimestamp(getMonthsFirstDate(new Date(prevYear, prevMonth)));
  };

  const getNextMonth = () => {
    const nextMonth = month === 12 ? 1 : month + 1;
    const nextYear = month === 12 ? year + 1 : year;
    setFirstDateTimestamp(getMonthsFirstDate(new Date(nextYear, nextMonth)));
  };

  return (
    <div className="App">
      <div className="month-change-container">
        <IconButton onClick={getPreviousMonth} aria-label="chevron-left">
          <ChevronLeftIcon />
        </IconButton>
        <span className="month-display">
          {Months[month]} {year}
        </span>
        <IconButton onClick={getNextMonth} aria-label="chevron-right">
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default App;
