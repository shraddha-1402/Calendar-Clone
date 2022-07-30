import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";

const DateTimePicker = ({ value, setEventDetails, label }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopTimePicker
        label={label}
        value={value}
        onChange={(newValue) => {
          setEventDetails((prev) => ({
            ...prev,
            [label === "Start Time" ? "startTime" : "endTime"]: newValue,
          }));
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export { DateTimePicker };
