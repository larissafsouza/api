var express = require('express');
var academicActivity = require('../../../models/academic_activity');
var router = express.Router();


const frequencyPerYearAction = function(req, res, next) {
  academicActivity.aggregate([
        {
            $match: {
                ano_ingresso: parseInt(req.query.ano_ingresso)
            }
        },
        {
            $group: {
                _id: {
                      'ano': '$ano',
                      'periodo': '$periodo',
                      'cod_curso': '$cod_curso',
                      'id_aluno': '$id_aluno'
                },
                quantidade: {$sum: 1}
            }
        },
        {
            $group: {
                _id: {
                      'ano_ingresso': '$_id.ano_ingresso',
                      'ano': '$_id.ano'
                },
                quantidade: {$sum: 1}
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

module.exports = frequencyPerYearAction;
