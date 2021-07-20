const express = require('express');

// Import validator

// Import controller
const { getCompanies } = require('../controllers/company');

const router = express.Router();

router.post('/', getCompanies);

module.exports = router;
