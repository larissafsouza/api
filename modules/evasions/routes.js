var express = require('express');

const typeEvasionPerYearAction = require('./actions/type_evasion_per_year');
const totalEvasionPerYearAction = require('./actions/total_evasion_per_year');
const totalTypesEvasionPerYearAction = require('./actions/total_types_evasion_per_year');

var router = express.Router();

router.get('/evasions/type-evasion-per-year', typeEvasionPerYearAction);
router.get('/evasions/total-evasion-per-year', totalEvasionPerYearAction);
router.get('/evasions/total-types-evasion-per-year', totalTypesEvasionPerYearAction);

module.exports = router;
