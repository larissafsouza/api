var express = require('express');

const frequencyPerPeriodAction = require('./actions/frequency_per_period');
const frequencyPerYearAction = require('./actions/frequency_per_year');

var router = express.Router();

router.get('/activities/frequency-per-period', frequencyPerPeriodAction);
router.get('/activities/frequency-per-year', frequencyPerYearAction);

module.exports = router;
