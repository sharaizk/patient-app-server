const express = require("express");
const cors = require("cors");
const xss = require("xss-clean");
const app = express();
const database = require("./config/db");
const bodyParser = require("body-parser");

// === CORS Enabled ===
app.use(cors());

// TO GET BODY IN HTTP POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// === Connecting the DB ===
database.connect();

// === Adding Secuirty ===
app.use(xss());

// IMPORTING AND REGISTERING ROUTES

const authRoutes = require("./routes/auth.routes");
const patientRoutes = require("./routes/patient.routes");
app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);

module.exports = app;
