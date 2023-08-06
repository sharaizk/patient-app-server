const router = require("express").Router();
const {
  getAllPatients,
  addPatient,
  deletePatient,
  updatePatient,
  getSinglePatient
} = require("../controllers/Patient.controller");

// DEFINING ROUTES
router.get("/patients", getAllPatients);
router.post("/add", addPatient);
router.get("/patients/:id", getSinglePatient);
router.delete("/delete/:id", deletePatient);
router.put("/update/:id", updatePatient);

module.exports = router;
