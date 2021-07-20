const express = require('express');

// Import validator

// Import controller
const { getIndustries } = require('../controllers/industry');

const router = express.Router();

router.post('/', getIndustries);

module.exports = router;
