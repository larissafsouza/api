var express = require('express');
var academicActivity = require('../../models/academic_activity');
var router = express.Router();


const yearsEntryAction = function(req, res, next) {
  academicActivity.aggregate([
        {
            $group: {
                _id: '$ano_ingresso',
                count: {$sum: 1}
            }
        }
    ], function (err, result) {
        if (err) {
            next(err);
        } else {
            res.send(result);
        }
    });
};

module.exports = yearsEntryAction;
