var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var dbjs = require('mongojs');


var index = require('./modules/server/routes/index');
var users = require('./modules/server/routes/users');


var app = new express();

var app_path = 'static';

app.set('views', path.join(__dirname, app_path));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(app_path, express.static(path.join(__dirname, app_path)));//Front End Folder or Page
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/api', users);
var port = 4247;
app.listen(port, function () {
    console.log("Server Started");
});