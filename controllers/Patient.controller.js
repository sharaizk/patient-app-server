const { off } = require("../app");
const Patients = require("../models/Patient.model");

exports.getAllPatients = async (req, res) => {
  try {
    // SETTING PAGE LIMIT AND OFFSET FOR PAGINATION
    const { page = 0 } = req.query;
    const limit = 5;
    const offsetLimit = (parseInt(page) + 1) * limit;
    const patients = await Patients.findAndCountAll({
      limit: offsetLimit,
      where: {
        deleted: false,
      },
    });

    // // COUNTING TOTAL PAGES
    setTimeout(() => {
      return res.status(200).json({
        patients: patients.rows,
        totalAvailable: patients.count,
        totalPages: Math.ceil(patients.count / limit),
      });
    }, 1000);
  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong while fetching patients",
      data: null,
    });
  }
};
exports.getSinglePatient = async (req, res) => {
  try {
    const patientId = req.params.id;
    // CHECKING IF PATIENT EXISTS OR NOT
    const patientExists = await Patients.findOne({
      where: {
        id: patientId,
      },
    });
    return res.status(200).json({
      patient: patientExists,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong while updating patient",
      data: null,
    });
  }
};

exports.addPatient = async (req, res) => {
  try {
    const { name, age, gender, contactInformation, healthHistory } = req.body;
    // CHECKING IF PROVIDED DATA IS COMPLETE OR NOT
    if (
      !name ||
      !age ||
      !gender ||
      !contactInformation ||
      !healthHistory ||
      !parseInt(age)
    ) {
      return res.status(403).json({ error: "Invalid or Incomplete Data" });
    }

    // SAVING PATIENT
    const newPatient = await Patients.create({
      name: name,
      age: age,
      gender: gender,
      contactInformation: contactInformation,
      healthHistory: healthHistory,
    });
    if (newPatient) {
      return res
        .status(200)
        .json({ message: "New Patient added successfully" });
    }

    return res.status(500).json({
      error: "Something went wrong while adding a patient",
      data: null,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong while adding a patient",
      data: null,
    });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    const patientId = req.params.id;
    // CHECKING IF PATIENT EXISTS OR NOT
    const patientExists = await Patients.findOne({
      where: {
        id: patientId,
      },
    });
    if (!patientExists) {
      return res.status(403).json({
        error: "Patient doesn't exist",
        data: null,
      });
    }
    // IF EXISTS> DELETE
    // const deletedPatient = await Patients.destroy({
    //   where: {
    //     id: patientId,
    //   },
    // });
    patientExists.deleted = true;
    await patientExists.save();

    return res.status(200).json({ message: "Patient Deleted successfully" });
  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong while deleting patient",
      data: null,
    });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const patientId = req.params.id;
    const { name, age, gender, contactInformation, healthHistory } = req.body;

    // CHECKING IF PROVIDED DATA IS COMPLETE OR NOT
    if (
      !name ||
      !age ||
      !gender ||
      !contactInformation ||
      !healthHistory ||
      !parseInt(age)
    ) {
      return res.status(403).json({ error: "Invalid or Incomplete Data" });
    }
    // CHECKING IF PATIENT EXISTS OR NOT
    const patientExists = await Patients.findOne({
      where: {
        id: patientId,
      },
    });
    if (!patientExists) {
      return res.status(403).json({
        error: "Patient doesn't exist",
        data: null,
      });
    }
    // UPDATING PATIENT DATA
    patientExists.name = name;
    patientExists.age = age;
    patientExists.gender = gender;
    patientExists.contactInformation = contactInformation;
    patientExists.healthHistory = healthHistory;
    await patientExists.save();

    return res.status(200).json({ message: "Patient Updated successfully" });
  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong while updating patient",
      data: null,
    });
  }
};
