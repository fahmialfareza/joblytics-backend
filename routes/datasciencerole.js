const express = require('express');

// Import validator

// Import controller
const { getRole } = require('../controllers/datasciencerole');

const router = express.Router();

router.post('/', getRole);

module.exports = router;
