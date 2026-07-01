import { useEffect, useState } from "react";

function SOPWidget() {
  const [status, setStatus] = useState("Monitoring...");
  const [priority, setPriority] = useState("Normal");

  useEffect(() => {
    const bitcoinPrice = 60073;

    if (bitcoinPrice > 60000) {
      setStatus("Notify Treasury Team");
      setPriority("HIGH");
    }
  }, []);

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
      <h2>🚨 SOP Trigger</h2>

      <h3>Priority: {priority}</h3>

      <p>
        <b>Action:</b> {status}
      </p>

      <p>
        <b>Status:</b> Pending
      </p>
    </div>
  );
}

export default SOPWidget;