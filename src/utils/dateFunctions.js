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

const isToday = ({ date, month, year }) => {
  const today = new Date();
  return (
    date === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear()
  );
};

export { getMonthsFirstDate, daysInMonth, getDay, isToday };
