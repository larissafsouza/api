var express = require('express');
var qs = require('querystring');
var academicActivity = require('../../../models/academic_activity');
var router = express.Router();


const situationPerPeriodAction = function(req, res, next) {
  academicActivity.aggregate([
        {
            $match: {
                nome_ativ_curricular: req.query.course,
                ano_ingresso: parseInt(req.query.year_entry),
                ano: parseInt(req.query.year),
                periodo: req.query.period
            }
        },
        {
            $group: {
                _id: {
                      'cod_curso': '$cod_curso',
                      'descricao_situacao': '$descricao_situacao'
                },
                quantity: {$sum: 1}
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

module.exports = situationPerPeriodAction;
