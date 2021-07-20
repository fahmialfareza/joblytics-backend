const express = require('express');

// Import validator

// Import controller
const { getJobTrends } = require('../controllers/jobtrend');

const router = express.Router();

router.post('/', getJobTrends);

module.exports = router;
