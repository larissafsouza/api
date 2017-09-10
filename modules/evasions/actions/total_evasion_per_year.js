var express = require('express');
var academicActivity = require('../../../models/academic_activity');
var router = express.Router();


const totalEvasionPerYearAction = function(req, res, next) {
  academicActivity.aggregate([
        {
            $match: {
                ano_ingresso: parseInt(req.query.year_entry),
                forma_saida: {$ne: null}
            }
        },
        {
            $group: {
                _id: {
                      'cod_curso': '$cod_curso',
                      'ano_saida': '$ano_saida',
                      'id_aluno': '$id_aluno'
                },
                quantity: {$sum: 1}
            }
        },
        {
            $group: {
                _id: {
                      'year_exit': '$_id.ano_saida',
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

module.exports = totalEvasionPerYearAction;
