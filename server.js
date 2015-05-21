var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    morgan      = require('morgan'),
    mongoose    = require('mongoose'),
    config      = require('./config'),
    path        = require('path');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

mongoose.connect(config.database);

apiRouterUsers = require('./app/routes/users')(app, express);
apiRouterQuestoes = require('./app/routes/questoes')(app, express);
apiRouterTemas = require('./app/routes/temas')(app, express);
app.use('/api', apiRouterUsers);
app.use('/api', apiRouterQuestoes);
app.use('/api', apiRouterTemas);

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(config.port);
console.log('The magic happens on port ' + config.port);
