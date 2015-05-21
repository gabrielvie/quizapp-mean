var bodyParser = require('body-parser'),
    Tema       = require('../models/temas'),
    config     = require('../../config');

module.exports = function(app, express) {
    var apiRouter = express.Router();
    apiRouter.route('/temas')
        .get(function(req, res){
            Tema.find().sort({titulo: 1}).exec(function(err, temas){
                if (err) return res.send(err);

                res.json(temas);
            });
        })
        .post(function(req, res){
            var tema = new Tema();
            tema.titulo = req.body.titulo;

            tema.save(function(err){
                if (err) return res.send(err);

                res.json({ message: 'Tema salvo.' });
            });
        });

    return apiRouter;
};