var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var academicActivitySchema = new Schema({
  id_aluno: { type: String, required: true },
  nome_curso: { type: String, required: true },
  cod_curso: { type: String, required: true },
  versao_curso: { type: String, required: true },
  cod_ativ_curricular: { type: String, required: true },
  nome_ativ_curricular: { type: String, required: true },
  media_final: { type: Number, required: true },
  descricao_situacao: { type: String, required: true },
  ano: { type: Number, required: true },
  periodo: { type: String, required: true },
  creditos: { type: Number, required: true },
  carga_horario_pratica: { type: Number, required: false },
  carga_horario_teoria: { type: Number, required: false },
  forma_ingresso: { type: String, required: true },
  ano_ingresso: { type: Number, required: true },
}, {collection: 'atividades_academica_sistemas_de_informacao'});

var academicActivity = mongoose.model('atividades_academica_sistemas_de_informacao', academicActivitySchema);

module.exports = academicActivity;
