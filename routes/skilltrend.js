const express = require('express');

// Import validator

// Import controller
const { getSkillTrends } = require('../controllers/skilltrend');

const router = express.Router();

router.post('/', getSkillTrends);

module.exports = router;
