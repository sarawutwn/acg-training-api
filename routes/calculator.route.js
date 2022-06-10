const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { Calculators } = require("../models/index.model");
const primeCheck = require("../method/prime");
const paginate = require("../method/paginate")

router.post(
  "/create",
  body("start_value").notEmpty(),
  body("end_value").notEmpty(),
  body("ip_address").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    const { start_value, end_value, ip_address } = req.body;
    let prime = [];
    for (let i = start_value; i <= end_value; i++) {
      const result = await primeCheck(i);
      if (result) prime.push(i);
    }
    await Calculators.create({
      start_value,
      end_value,
      ip_address,
      value_items: prime,
    });
    res.json({
      length: prime.length,
      prime: prime,
    });
  }
);

router.get("/history/:ip", async (req, res) => {
  try {
    const result = await Calculators.findAll({
      where: { ip_address: req.params.ip },
      attributes: ['id', 'start_value', 'end_value', 'createdAt'],
      order: [['createdAt', 'DESC']]
    });
    if (!req.query.page && !req.query.limit) {
      await res.json(result);
      return;
    }
    const response = await paginate(result, req.query.page, req.query.limit, `/api/calcurator/history/${req.params.ip}`);
    res.json(response);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/:id", async (req, res) => {
  const response = await Calculators.findByPk(req.params.id);
  res.json(response)
})

module.exports = router;
