var express = require('express');
const yearsEntryAction = require('../modules/actions/years_entry');
const formsEntryAction = require('../modules/actions/forms_entry');

var router = express.Router();

router.get('/years-entry', yearsEntryAction);
router.get('/forms-entry', formsEntryAction);

module.exports = router;
