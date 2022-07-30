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

  return (
    <div className="App">
      <div className="month-change-container">
        <IconButton aria-label="chevron-left">
          <ChevronLeftIcon />
        </IconButton>
        <span className="month-display">
          {Months[month]} {year}
        </span>
        <IconButton aria-label="chevron-right">
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default App;
