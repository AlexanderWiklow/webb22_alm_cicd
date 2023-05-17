const express = require('express');

const router = express.Router();

router.get('/hello', (req, res) => {
  res.send('Hello, Worl!');
});

module.exports = router;
