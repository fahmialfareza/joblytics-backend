const express = require('express');

// Import validator

// Import controller
const { getJobs } = require('../controllers/job');

const router = express.Router();

router.post('/', getJobs);

module.exports = router;
