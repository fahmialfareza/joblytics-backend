const express = require('express');

// Import validator

// Import controller
const { getWorks } = require('../controllers/futureofwork');

const router = express.Router();

router.post('/', getWorks);

module.exports = router;
