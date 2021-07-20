const express = require('express');

// Import validator

// Import controller
const { getJobTrendByCities } = require('../controllers/jobtrendbycity');

const router = express.Router();

router.post('/', getJobTrendByCities);

module.exports = router;
