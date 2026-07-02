function HolidayWidget() {
  const holidays = [
    {
      date: "15 Aug 2026",
      name: "Independence Day",
    },
    {
      date: "02 Oct 2026",
      name: "Gandhi Jayanti",
    },
    {
      date: "25 Dec 2026",
      name: "Christmas",
    },
  ];

  return (
    <div
      style={{
        background: "#ff9800",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h2>📅 Upcoming Holidays</h2>

      {holidays.map((holiday, index) => (
        <div key={index}>
          <b>{holiday.date}</b>
          <br />
          {holiday.name}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default HolidayWidget;