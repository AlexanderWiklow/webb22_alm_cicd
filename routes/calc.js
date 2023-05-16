const express = require('express');
const calc = require('../public/javascripts/calculator');

const router = express.Router();

router.get('/add', (req, res) => {
  // const { val } = req.query;
  // console.log(`val: ${val}`);
  // const result = val.reduce((acc, num) => acc + parseInt(num, 10), 0);
  res.send(calc.toString());
});

module.exports = router;
