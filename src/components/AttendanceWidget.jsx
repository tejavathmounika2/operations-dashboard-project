function AttendanceWidget() {
  return (
    <div
      style={{
        background: "#3F51B5",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h2>👥 Employee Attendance</h2>

      <h3>✅ Present : 420</h3>

      <h3>❌ Absent : 12</h3>

      <h3>🌴 On Leave : 8</h3>
    </div>
  );
}

export default AttendanceWidget;