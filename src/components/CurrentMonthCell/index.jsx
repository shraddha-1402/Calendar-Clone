import { useState } from "react";
import { EventCreateModal } from "../EventCreateModal";

const CurrentMonthCell = ({ innerIndex, outerIndex, firstDateTimestamp }) => {
  const [openEventModal, setOpenEventModal] = useState(false);
  const { day, month, year } = firstDateTimestamp;

  return (
    <td
      className="table-cell body-cell"
      onClick={() => setOpenEventModal(true)}
    >
      <span className="cell-date">{1 + outerIndex * 7 + innerIndex - day}</span>
      <EventCreateModal
        openEventModal={openEventModal}
        setOpenEventModal={setOpenEventModal}
        date={1 + outerIndex * 7 + innerIndex - day}
        year={year}
        month={month}
      />
    </td>
  );
};

export { CurrentMonthCell };
