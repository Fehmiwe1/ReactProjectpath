import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/MainPage.css";
import security from "../assets/img/security.png";
import incident from "../assets/img/Incident.png";

function MainPage() {
  return (
    <div className="main">
      <section>
        <div className="container">
          <h1 className="main-page-title">Security Unit</h1>

          <div className="mainPageContainer">
            <div className="imgContainer">
              <h2>Security Man</h2>
              <img src={security} alt="Security" />
            </div>
            <div className="mainPage-container">
              <div className="incidentMP-container">
                <form className="incidentMP-form">
                  <h1>Incident</h1>
                  <img
                    src={incident}
                    alt="Incident"
                    className="Incident-image"
                  />
                  <Link to="/Incident" className="btnShow">
                    Show Incident
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
