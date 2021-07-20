const express = require('express');

// Import validator

// Import controller
const { getJobVsBootcamp } = require('../controllers/jobvsbootcamp');

const router = express.Router();

router.post('/', getJobVsBootcamp);

module.exports = router;
