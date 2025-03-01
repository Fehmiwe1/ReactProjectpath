const express = require("express");
const router = express.Router();
const dbSingleton = require("../dbSingleton");

// Execute a query to the database
const db = dbSingleton.getConnection();

router.get("/", (req, res) => {
  const query = "SELECT * FROM incident";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM incident WHERE id = ? ";
  db.query(query, id, (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { Incident_Name, Incident_Date, ID_Employee, Description } = req.body;

  // Ensure required fields are provided
  if (!Incident_Name || !Incident_Date || !ID_Employee || !Description) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const query =
    "INSERT INTO incident (Incident_Name, Incident_Date, ID_Employee, Description) VALUES (?, ?, ?, ?)";

  db.query(
    query,
    [Incident_Name, Incident_Date, ID_Employee, Description],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err });
      }

      res.json({
        message: "Report added successfully!",
        id: results.insertId,
        report: { Incident_Name, Incident_Date, ID_Employee, Description },
      });
    }
  );
});

module.exports = router;
