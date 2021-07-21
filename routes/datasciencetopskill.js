const express = require('express');

// Import validator

// Import controller
const { getTopSkills } = require('../controllers/datasciencetopskill');

const router = express.Router();

router.post('/', getTopSkills);

module.exports = router;
