import "./styles.css";
import { useState } from "react";
import { Dialog, IconButton, Stack } from "@mui/material";
import { CloseIcon } from "../../utils/iconsExport";
import { Months } from "../../constants";

const EventListDisplayModal = ({ eventList, date, month }) => {
  const [openEventListModal, setOpenEventModal] = useState(false);
  const handleModalOpen = (e) => {
    e.stopPropagation();
    setOpenEventModal(true);
  };

  const handleModalClose = (e) => {
    e.stopPropagation();
    setOpenEventModal(false);
  };

  return (
    <>
      <span className="event-tilte-exapansion" onClick={handleModalOpen}>
        More...
      </span>

      <Dialog open={openEventListModal} onClose={handleModalClose}>
        <div className="modal-card">
          <div className="close-icon-container">
            <h3>
              {date} {Months[month]}
            </h3>
            <IconButton size="small" onClick={handleModalClose}>
              <CloseIcon size="small" />
            </IconButton>
          </div>
          <Stack>
            {eventList?.map(({ data, id }) => {
              return (
                <div key={id} className="modal-list-tile">
                  Title: {data?.title}
                </div>
              );
            })}
          </Stack>
        </div>
      </Dialog>
    </>
  );
};

export { EventListDisplayModal };
