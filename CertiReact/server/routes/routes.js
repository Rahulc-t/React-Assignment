const express = require("express");
const router = express.Router();
const certs = require("../models/ceritidetails");

router.post("/issue", async (req, res) => {
  try {
    const { course, certId, name, grade, date } = req.body;
    const newCert = new certs({
      course,
      certId,
      name,
      grade,
      date,
    });
    await newCert.save();
    res.send(newCert);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/view/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await certs.findOne({ certId: id });
    res.json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;