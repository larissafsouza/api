var express = require('express');
const yearsEntryAction = require('../modules/actions/years_entry');
const formsEntryAction = require('../modules/actions/forms_entry');
const averageApprovedSubjectsAction = require('../modules/atividades/actions/average_approved_subjects');

var router = express.Router();

router.get('/years-entry', yearsEntryAction);
router.get('/forms-entry', formsEntryAction);
router.get('/average-approved-subjects', averageApprovedSubjectsAction);

module.exports = router;
