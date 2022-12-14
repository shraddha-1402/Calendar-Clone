import "./styles.css";
import { useEffect, useState } from "react";
import { Weekdays } from "../../constants";
import { daysInMonth } from "../../utils/dateFunctions";
import { CurrentMonthCell } from "../index";
import { getEvents } from "../../services/eventHandlers";

const Calendar = ({ firstDateTimestamp }) => {
  const [allEvents, setAllEvents] = useState({});

  const { day, month, year } = firstDateTimestamp;
  useEffect(() => {
    (async () => setAllEvents(await getEvents({ month, year })))();
  }, [firstDateTimestamp, month, year]);

  return (
    <table className="table">
      <thead>
        <tr>
          {Weekdays.map((day) => (
            <td key={day} className="table-cell head-cell">
              {day}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {new Array(6).fill(0).map((_, outerIndex) => {
          return (
            <tr key={outerIndex}>
              {new Array(7).fill(0).map((_, innerIndex) => {
                if (
                  (outerIndex === 0 && innerIndex < day) ||
                  1 + outerIndex * 7 + innerIndex - day >
                    daysInMonth({ month, year })
                )
                  return <td className="table-cell" key={innerIndex}></td>;

                return (
                  <CurrentMonthCell
                    allEvents={allEvents}
                    setAllEvents={setAllEvents}
                    key={innerIndex}
                    innerIndex={innerIndex}
                    outerIndex={outerIndex}
                    firstDateTimestamp={firstDateTimestamp}
                  />
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { Calendar };
