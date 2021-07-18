const express = require('express');

// Import validator

// Import controller
const { hello } = require('../controllers/hello');

const router = express.Router();

router.get('/', hello);

module.exports = router;
