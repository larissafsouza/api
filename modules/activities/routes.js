var express = require('express');

const frequencyPerPeriodAction = require('./actions/frequency_per_period');

var router = express.Router();

router.get('/activities/frequency-per-period', frequencyPerPeriodAction);

module.exports = router;
