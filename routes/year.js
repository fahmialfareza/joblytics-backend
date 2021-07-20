const express = require('express');

// Import validator

// Import controller
const { getYears } = require('../controllers/year');

const router = express.Router();

router.post('/', getYears);

module.exports = router;
