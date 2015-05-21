var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    Questao = require('./questoes');

var TemaSchema = new Schema({
    titulo:   { type: String, required: true },
    since:    { type: Date,   default: Date.now },
    questoes: [{ type: Schema.Types.ObjectId, ref: 'Questao' }]
});

module.exports = mongoose.model('Tema', TemaSchema);
