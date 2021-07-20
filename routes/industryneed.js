const express = require('express');

// Import validator

// Import controller
const { getIndustryNeeds } = require('../controllers/industryneed');

const router = express.Router();

router.post('/', getIndustryNeeds);

module.exports = router;
