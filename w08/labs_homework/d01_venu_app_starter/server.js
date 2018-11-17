var express    = require('express');
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var models     = require('./models');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.send('hello');
});

app.listen(3000, function() {
  console.log('Server listening on 3000...');
});
