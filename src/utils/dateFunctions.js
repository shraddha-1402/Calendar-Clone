const getMonthsFirstDate = (date) => {
  const firstDateTimestamp = new Date(date.getFullYear(), date.getMonth());
  return {
    day: firstDateTimestamp.getDay(),
    month: firstDateTimestamp.getMonth(),
    year: firstDateTimestamp.getFullYear(),
  };
};

const daysInMonth = ({ month, year }) =>
  32 - new Date(year, month, 32).getDate();

const getDay = ({ year, month, date }) => new Date(year, month, date).getDay();

export { getMonthsFirstDate, daysInMonth, getDay };
