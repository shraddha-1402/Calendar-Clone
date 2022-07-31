import "./styles.css";
import { Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { EventCreateModal, EventListDisplayModal } from "../index";
import { isToday } from "../../utils/dateFunctions";

const CurrentMonthCell = ({
  allEvents,
  innerIndex,
  outerIndex,
  firstDateTimestamp,
  setAllEvents,
}) => {
  const [openEventModal, setOpenEventModal] = useState(false);
  const [eventList, setEventList] = useState([]);
  const { day, month, year } = firstDateTimestamp;
  const date = 1 + outerIndex * 7 + innerIndex - day;

  useEffect(() => {
    const list = allEvents[`${date}${month}${year}`];
    setEventList(list ? list : []);
  }, [allEvents]);

  return (
    <td
      className="table-cell body-cell"
      onClick={() => setOpenEventModal(true)}
    >
      <span
        className={`cell-date ${
          isToday({ date, month, year }) ? "todays-cell" : ""
        }`}
      >
        {date}
      </span>
      <Stack justifyContent="start" marginTop="0.5rem">
        {eventList.length > 3
          ? eventList.slice(0, 3)?.map(({ data, id }) => (
              <div className="event-tile" key={id}>
                {data?.title}
              </div>
            ))
          : eventList?.map(({ data, id }) => (
              <div className="event-tile" key={id}>
                {data?.title}
              </div>
            ))}
        {eventList.length > 3 && (
          <EventListDisplayModal
            eventList={eventList}
            date={date}
            month={month}
          />
        )}
      </Stack>
      <EventCreateModal
        setAllEvents={setAllEvents}
        openEventModal={openEventModal}
        setOpenEventModal={setOpenEventModal}
        date={date}
        year={year}
        month={month}
      />
    </td>
  );
};

export { CurrentMonthCell };
