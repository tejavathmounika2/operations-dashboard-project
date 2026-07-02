function WorldClockWidget() {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const india = new Date().toLocaleTimeString("en-IN", {
    ...options,
    timeZone: "Asia/Kolkata",
  });

  const london = new Date().toLocaleTimeString("en-GB", {
    ...options,
    timeZone: "Europe/London",
  });

  const newYork = new Date().toLocaleTimeString("en-US", {
    ...options,
    timeZone: "America/New_York",
  });

  const tokyo = new Date().toLocaleTimeString("ja-JP", {
    ...options,
    timeZone: "Asia/Tokyo",
  });

  return (
    <div
      style={{
        background: "#0d6efd",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h2>🌍 World Clock</h2>

      <p>🇮🇳 India : {india}</p>
      <p>🇬🇧 London : {london}</p>
      <p>🇺🇸 New York : {newYork}</p>
      <p>🇯🇵 Tokyo : {tokyo}</p>
    </div>
  );
}

export default WorldClockWidget;