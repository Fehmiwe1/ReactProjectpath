import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/styles/Incident.css";
import { Link } from "react-router-dom";

function Incident() {
  const [incident, setIncident] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("/post") // Relative URL, no base URL needed
      .then((res) => {
        setIncident(res.data);
        console.log(res.data); // Check the data structure in console
      })
      .catch((error) => {
        console.error("Error:", error);
        setMsg("Failed to fetch incident data.");
      });
  };

  return (
    <div className="main">
      <section>
        <div className="container-Incident">
          <div className="incidentPageContainer">
            <h1 className="incident-page-title">
              Here you can view unusual event reports
            </h1>
            <div className="create-incident">
              <Link to="/createincident" className="btn">
                New Report
              </Link>
            </div>
            <div className="msg">{msg}</div>
            <div className="incident-containers">
              {incident &&
                incident.map((incident) => (
                  <div key={incident.ID} className="incident-card">
                    <h1 className="incident-title">{incident.id}</h1>
                    <h2 className="incident-title">{incident.Incident_Name}</h2>
                    <p className="incident-p">{incident.Incident_Date}</p>

                    <Link
                      to={`/post/${incident.id}`} // Relative link
                      className="view-button mr1"
                    >
                      View
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Incident;
