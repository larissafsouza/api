var express = require('express');

const averageApprovedSubjectsAction = require('./actions/average_approved_subjects');
const frequencyPerPeriodAction = require('./actions/frequency_per_period');

var router = express.Router();

router.get('/activities/average-approved-subjects', averageApprovedSubjectsAction);
router.get('/activities/frequency-per-period', frequencyPerPeriodAction);

module.exports = router;
