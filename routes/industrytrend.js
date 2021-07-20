const express = require('express');

// Import validator

// Import controller
const { getIndustryTrends } = require('../controllers/industrytrend');

const router = express.Router();

router.post('/', getIndustryTrends);

module.exports = router;
