var bodyParser = require('body-parser'),
    User       = require('../models/user'),
    config     = require('../../config');

module.exports = function(app, express) {
    var apiRouter = express.Router();

    apiRouter.get('/', function(req, res){
        res.json({ message:'wow! welcome to our api :)'});
    });

    apiRouter.route('/users')
        .get(function(req, res){
            User.find(function(err, users){
                if (err) return res.send(err);

                res.json(users);
            });
        })
        .post(function(req, res){
            var user = new User(req.body);

            user.save(function(err){
                if (err) {
                    if (err.code == 11000) return res.json({ success: false, message: 'This alias already exists.'})
                    else return res.send(err);
                }

                res.json({ message: 'User created!' });
            })
        });

    apiRouter.route('/users/:user_id')
        .get(function(req, res){
            User.findById(req.params.user_id, function(err, user){
                if (err) return res.send(err);

                res.json(user);
            });
        })
        .delete(function(req, res){
            User.remove({
                _id: req.params.user_id
            }, function(err, user){
                if (err) return res.send(err);

                res.json({ message: 'Successfully deleted!'});
            });
        });

    return apiRouter;
};
