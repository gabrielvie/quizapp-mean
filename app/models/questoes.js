var mongoose     = require('mongoose'),
    Schema       = mongoose.Schema,
    Tema         = require('./temas');

var AlternativaSchema = new Schema({
    titulo:  { type: String,  required: true },
    correta: { type: Boolean, default: false },
    since:   { type: Date,    default: Date.now }
});

var QuestaoSchema = new Schema({
    titulo: { type: String, required: true },
    since:  { type: Date,   default: Date.now },
    _tema: { type: Schema.Types.ObjectId, ref: 'Tema' },
    alternativas: [AlternativaSchema]
});

module.exports = mongoose.model('Questao', QuestaoSchema);
