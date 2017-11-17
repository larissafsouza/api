var express = require('express');
var qs = require('querystring');
var academicActivity = require('../../../models/academic_activity');
var router = express.Router();


const totalFrequencyPerPeriodAction = function(req, res, next) {
  academicActivity.aggregate([
        {
            $match: {
                ano_ingresso: parseInt(req.query.year_entry),
                ano: parseInt(req.query.year),
                periodo: req.query.period
            }
        },
        {
            $group: {
                _id: {
                      'cod_curso': '$cod_curso'
                },
                total: {$sum: 1}
            }
        },
        {
            $sort: {
                _id: 1
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

module.exports = totalFrequencyPerPeriodAction;
