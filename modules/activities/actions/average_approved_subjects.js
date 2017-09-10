var express = require('express');
var academicActivity = require('../../../models/academic_activity');
var router = express.Router();


const averageApprovedSubjectsAction = function(req, res, next) {
  academicActivity.aggregate([
        {
            $match: {
                media_final: {$gt: 5, $lt: 10}
            }
        },
        {
            $group: {
                _id: '$nome_ativ_curricular',
                media: {$avg: '$media_final'}
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

module.exports = averageApprovedSubjectsAction;
