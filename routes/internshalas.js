const express = require("express");
const router = express.Router();
const InternShala = require("../models/internShala");

router.get("/", async (req, res) => {
  try {
    const internShalas = await InternShala.find();
    res.json(internShalas);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const internShala = await InternShala.findById(req.params.id);
    res.json(internShala);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  const internShala = new InternShala({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
  });

  try {
    const a1 = await internShala.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

//UPDATE NAME
router.put("/", async (req, res) => {
  const filter = { name: "Rohit" };
  const update = { name: "newName" };
  try {
    const internShala = await InternShala.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.json(internShala);
  } catch (err) {
    res.send("Error " + err);
  }
});

//UPDATE USERNAME
router.put("/", async (req, res) => {
  const filter = { username: "rht123" };
  const update = { username: "newuserName" };
  try {
    const internShala = await InternShala.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.json(internShala);
  } catch (err) {
    res.send("Error " + err);
  }
});

module.exports = router;
