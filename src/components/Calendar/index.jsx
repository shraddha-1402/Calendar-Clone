import "./styles.css";
import { Weekdays } from "../../constants";
import { daysInMonth } from "../../utils/dateFunctions";
import { CurrentMonthCell } from "../index";

const Calendar = ({ firstDateTimestamp }) => {
  const { day, month, year } = firstDateTimestamp;
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
