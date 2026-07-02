function SystemAlertsWidget() {
  return (
    <div
      style={{
        background: "#D32F2F",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h2>🚨 System Alerts</h2>

      <h3>🟢 SAP Server : Online</h3>

      <h3>🟢 Database : Connected</h3>

      <h3>🟢 API Services : Running</h3>

      <h3>🟡 Backup : Scheduled at 11:00 PM</h3>

      <p>No Critical Alerts</p>
    </div>
  );
}

export default SystemAlertsWidget;