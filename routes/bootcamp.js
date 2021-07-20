const express = require('express');

// Import validator

// Import controller
const { getBootcamps } = require('../controllers/bootcamp');

const router = express.Router();

router.post('/', getBootcamps);

module.exports = router;
