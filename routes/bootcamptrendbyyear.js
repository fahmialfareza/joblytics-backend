const express = require('express');

// Import validator

// Import controller
const {
  getBootcampTrendByYears,
} = require('../controllers/bootcamptrendbyyear');

const router = express.Router();

router.post('/', getBootcampTrendByYears);

module.exports = router;
