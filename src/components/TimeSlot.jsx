function TimeSlot({ time, selected, booked, onSelect }) {
  let className = "time-slot";

  if (selected) {
    className += " selected";
  }

  if (booked) {
    className += " booked";
  }

  return (
    <button
      type="button"
      className={className}
      disabled={booked}
      onClick={() => onSelect(time)}
    >
      {time}
    </button>
  );
}

export default TimeSlot;