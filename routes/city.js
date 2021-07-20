const express = require('express');

// Import validator

// Import controller
const { getCities } = require('../controllers/city');

const router = express.Router();

router.post('/', getCities);

module.exports = router;
