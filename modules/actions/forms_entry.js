var express = require('express');
var academicActivity = require('../../models/academic_activity');
var router = express.Router();


const formsEntryAction = function(req, res, next) {
  academicActivity.aggregate([
        {
            $match: {
                forma_ingresso: {$ne: null}
            }
        },
        {
            $group: {
                _id: '$forma_ingresso',
                count: {$sum: 1}
            }
        },
        {
            $sort: {
                count: 1
            }
        }
    ], function (err, result) {
        if (err) {
            next(err);
        } else {
            res.send(result);
        }
    });
}

module.exports = formsEntryAction;
