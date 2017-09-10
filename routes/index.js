var express = require('express');
const yearsEntryAction = require('../modules/actions/years_entry');
const formsEntryAction = require('../modules/actions/forms_entry');
const averageApprovedSubjectsAction = require('../modules/activities/actions/average_approved_subjects');
const frequencyPerPeriodAction = require('../modules/activities/actions/frequency_per_period');
const typeEvasionPerYearAction = require('../modules/evasions/actions/type_evasion_per_year');
const totalEvasionPerYearAction = require('../modules/evasions/actions/total_evasion_per_year');
const totalTypesEvasionPerYearAction = require('../modules/evasions/actions/total_types_evasion_per_year');


var router = express.Router();

router.get('/years-entry', yearsEntryAction);
router.get('/forms-entry', formsEntryAction);
router.get('/activities/average-approved-subjects', averageApprovedSubjectsAction);
router.get('/activities/frequency-per-period', frequencyPerPeriodAction);
router.get('/evasions/type-evasion-per-year', typeEvasionPerYearAction);
router.get('/evasions/total-evasion-per-year', totalEvasionPerYearAction);
router.get('/evasions/total-types-evasion-per-year', totalTypesEvasionPerYearAction);

module.exports = router;
