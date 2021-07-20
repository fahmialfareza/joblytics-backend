const express = require('express');

// Import validator

// Import controller
const { getCompanyJobDemand } = require('../controllers/companyjobdemand');

const router = express.Router();

router.post('/', getCompanyJobDemand);

module.exports = router;
