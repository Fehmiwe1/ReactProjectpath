import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/styles/CreateIncident.css";

function CreateIncident() {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [newReport, setNewReport] = useState({
    Incident_Name: "",
    Incident_Date: "",
    ID_Employee: "",
    Description: "",
  });

  const navigate = useNavigate();

  // Handle changes to form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReport((prevReport) => ({
      ...prevReport,
      [name]: value,
    }));
  };

  const cleanString = (str) => {
    return str.trim().replace(/\s+/g, " ");
  };

const createReport = async (reportToSend) => {
  try {
    const res = await axios.post("/post/", reportToSend, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("Report created:", res.data);
    setMsg("Report was created successfully");
    setTimeout(() => {
      setMsg("");
      navigate("/");
    }, 2500);
  } catch (error) {
    console.error("Error:", error);
    setError("Failed to create report. Please try again.");
  }
};



  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanedReport = {
      Incident_Name: cleanString(newReport.Incident_Name),
      Incident_Date: newReport.Incident_Date,
      ID_Employee: newReport.ID_Employee.trim(),
      Description: cleanString(newReport.Description),
    };

    if (
      !cleanedReport.Incident_Name ||
      !cleanedReport.Incident_Date ||
      !cleanedReport.ID_Employee ||
      !cleanedReport.Description
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    createReport(cleanedReport);
  };

  return (
    <div className="main">
      <div className="create-report">
        <div className="msg">{msg}</div>
        <h2>Create New Incident Report</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="create-Report-form" onSubmit={handleSubmit}>
          <div>
            <label>Incident Name:</label>
            <input
              type="text"
              name="Incident_Name"
              value={newReport.Incident_Name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Incident Date:</label>
            <input
              type="datetime-local"
              name="Incident_Date"
              value={newReport.Incident_Date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Employee ID:</label>
            <input
              type="number"
              name="ID_Employee"
              value={newReport.ID_Employee}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="Description"
              value={newReport.Description}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Create Report</button>
        </form>
      </div>
    </div>
  );
}

export default CreateIncident;
