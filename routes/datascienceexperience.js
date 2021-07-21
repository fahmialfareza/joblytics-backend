const express = require('express');

// Import validator

// Import controller
const { getExperiences } = require('../controllers/datascienceexperience');

const router = express.Router();

router.post('/', getExperiences);

module.exports = router;
