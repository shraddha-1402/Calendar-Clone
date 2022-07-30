const CurrentMonthCell = ({ innerIndex, outerIndex, firstDateTimestamp }) => {
  const { day } = firstDateTimestamp;
  return (
    <td className="table-cell body-cell" key={innerIndex}>
      <span className="cell-date">{1 + outerIndex * 7 + innerIndex - day}</span>
    </td>
  );
};

export { CurrentMonthCell };
