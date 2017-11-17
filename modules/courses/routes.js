var express = require('express');

const averageApprovedSubjectsAction = require('./actions/average_approved_subjects');
const frequencyPerPeriodAction = require('./actions/frequency_per_period');
const totalFrequencyPerPeriodAction = require('./actions/total_frequency_per_period');
const situationPerPeriodAction = require('./actions/situation_per_period');
const totalSituationPerPeriodAction = require('./actions/total_situation_per_period');

var router = express.Router();

router.get('/courses/average-approved-subjects', averageApprovedSubjectsAction);
router.get('/courses/frequency-per-period', frequencyPerPeriodAction);
router.get('/courses/total-frequency-per-period', totalFrequencyPerPeriodAction);
router.get('/courses/situation-per-period', situationPerPeriodAction);
router.get('/courses/total-situation-per-period', totalSituationPerPeriodAction);

module.exports = router;
