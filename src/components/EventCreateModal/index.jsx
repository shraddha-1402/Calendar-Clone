import "./styles.css";
import { useState } from "react";
import { Button, Dialog, IconButton } from "@mui/material";
import { CloseIcon } from "../../utils/iconsExport";
import { DateTimePicker } from "../DateTimePicker";
import { Weekdays, Months } from "../../constants";
import { getDay } from "../../utils/dateFunctions";
import { addEvents } from "../../services/eventHandlers";

const initialEventDetailsValue = {
  title: "",
  description: "",
  detailType: "event",
  startTime: new Date(),
  endTime: new Date(),
};

const EventCreateModal = ({
  openEventModal,
  setOpenEventModal,
  date,
  month,
  year,
  setAllEvents,
}) => {
  const [eventDetails, setEventDetails] = useState(initialEventDetailsValue);

  const handleEventSubmit = (e) => {
    e.preventDefault();
    const eventId = addEvents({ ...eventDetails, date, month, year });
    if (eventId) {
      setAllEvents((prev) =>
        prev[`${date}${month}${year}`]
          ? {
              ...prev,
              [`${date}${month}${year}`]: [
                ...prev[`${date}${month}${year}`],
                { data: { ...eventDetails, date, month, year }, id: eventId },
              ],
            }
          : {
              ...prev,
              [`${date}${month}${year}`]: [
                { data: { ...eventDetails, date, month, year }, id: eventId },
              ],
            }
      );
    }
    setEventDetails(initialEventDetailsValue);
    setOpenEventModal(false);
  };

  const handleModalClose = (e) => {
    setOpenEventModal(false);
    e.stopPropagation();
  };

  const handleEventDetails = (e) => {
    if (e.target.name === "event-reminder")
      setEventDetails((prev) => ({
        ...prev,
        detailType: e.target.id,
      }));
    else
      setEventDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Dialog disableScrollLock open={openEventModal} onClose={handleModalClose}>
      <form onSubmit={handleEventSubmit} className="modal-card">
        <div className="close-icon-container">
          <h3>Event Details</h3>
          <IconButton size="small" onClick={handleModalClose}>
            <CloseIcon size="small" />
          </IconButton>
        </div>
        <input
          type="text"
          value={eventDetails.title}
          onChange={handleEventDetails}
          name="title"
          placeholder="Title"
          className="input-title"
        />
        <textarea
          value={eventDetails.description}
          onChange={handleEventDetails}
          placeholder="Description"
          name="description"
          className="input-textarea"
        ></textarea>
        <div className="input-radio-container">
          <input
            checked={eventDetails.detailType === "event"}
            onChange={handleEventDetails}
            className="input-radio"
            type="radio"
            name="event-reminder"
            id="event"
          />
          <label className="input-radio-label" htmlFor="event">
            Event
          </label>
          <input
            checked={eventDetails.detailType === "reminder"}
            onChange={handleEventDetails}
            className="input-radio"
            type="radio"
            name="event-reminder"
            id="reminder"
          />
          <label className="input-radio-label" htmlFor="reminder">
            Reminder
          </label>
        </div>
        <p>
          {Weekdays[getDay({ year, month, date })]}, {date} {Months[month]}
        </p>
        <DateTimePicker
          value={eventDetails.startTime}
          setEventDetails={setEventDetails}
          label="Start Time"
        />
        {eventDetails.detailType === "event" && (
          <DateTimePicker
            value={eventDetails.endTime}
            setEventDetails={setEventDetails}
            label="End Time"
          />
        )}
        <Button
          sx={{ alignSelf: "flex-end" }}
          variant="contained"
          color="primary"
          size="small"
          disableElevation
          disabled={eventDetails.title === ""}
          type="submit"
        >
          Save
        </Button>
      </form>
    </Dialog>
  );
};

export { EventCreateModal };
