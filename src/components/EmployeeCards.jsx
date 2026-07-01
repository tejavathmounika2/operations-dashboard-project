import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeCards() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const res = await axios.get(
        "https://randomuser.me/api/?results=6"
      );

      setEmployees(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Employees</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {employees.map((emp, index) => (
          <div
            key={index}
            style={{
              width: "200px",
              background: "white",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 2px 10px gray",
            }}
          >
            <img
              src={emp.picture.large}
              alt={emp.name.first}
              style={{
                width: "100px",
                borderRadius: "50%",
              }}
            />

            <h3>
              {emp.name.first} {emp.name.last}
            </h3>

            <p>{emp.email}</p>

            <p>{emp.location.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeCards;