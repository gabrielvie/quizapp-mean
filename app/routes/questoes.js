var bodyParser = require('body-parser'),
    Questao    = require('../models/questoes'),
    Tema       = require('../models/temas'),
    config     = require('../../config');


module.exports = function (app, express) {
    var apiRouter = express.Router();

    apiRouter.route('/questoes')
        .get(function (req, res) {
            Questao.find(function(err, questoes){
                if (err) return res.send(err);

                res.json(questoes);

            })
        })
        .post(function (req, res) {
            Tema.findById(req.body._tema, function (err, tema) {
                if (err) return res.send(err);

                var questao = new Questao(req.body);
                questao.save(function (err, result) {
                    if (err) return res.send(err);

                    tema.questoes.push(questao);
                    tema.save(function (err) {
                        if (err) return res.send(err);
                    });


                    Questao
                        .find({ _id: result._id })
                        .populate('_tema')
                        .exec(function (err, questao) {
                            if (err) return res.send(err);
                            res.json(questao);
                        });
                });

            });
        });

    apiRouter.route('/questoes/:tema_id')
        .get(function (req, res) {
            Questao.find({ _tema: req.params.tema_id },function(err, questoes){
                if (err) return res.send(err);

                res.json(questoes);

            })
        })

    apiRouter.route('/questoes/:questao_id')
        .delete(function (req, res) {
            Questao.remove({
                _id: req.params.questao_id
            }, function (err, questao) {
                if (err) return res.send(err);

                res.json({ message: 'Successfully deleted!'});
            })
        });

    return apiRouter;
};

