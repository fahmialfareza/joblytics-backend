const express = require('express');

// Import validator

// Import controller
const { getSkills } = require('../controllers/skill');

const router = express.Router();

router.post('/', getSkills);

module.exports = router;
