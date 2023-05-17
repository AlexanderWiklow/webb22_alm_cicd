const express = require('express');
const { Calculator } = require('../public/javascripts/calculator');

const calc = new Calculator();

const router = express.Router();

router.get('/add', (req, res) => {
  const { val } = req.query;
  console.log(`val: ${val}`);
  calc.add(parseInt(val, 10));
  const result = calc.getResult();
  res.send(result.toString());
});

module.exports = router;
