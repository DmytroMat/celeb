/*
    Require modules
*/
const express = require('express');
const bodyParser = require('body-parser');
var routes = require("./server/routes");
var app = express();
var uploads = express();
var admin = express();
// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://localhost:27017/celebdb';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
routes.register(app);

admin.set("view options", {layout: false});
admin.use(express.static(__dirname + '/public/admin'));

// admin.get('/', function (req, res) {
//   console.log(admin.mountpath);
//   res.render('index.html');
// });
admin.all('/*', function(req, res, next) {
  res.sendFile('index.html', { root: __dirname + '/public/admin' });
});

uploads.use(express.static(__dirname + '/uploads'));
app.use(['/admin', '/manager', '/admin/*', '/manager/*'], admin);
app.use(['/uploads', '/uploads/*'], uploads);

app.set("view options", {layout: false});
app.use(express.static(__dirname + '/public'));

app.all('/*', function(req, res, next) {
  res.sendFile('index.html', { root: __dirname + '/public' });
});

// catch 404
app.use(function (req, res, next) {

  var min=404; 
  var max=408;  
  var random =Math.floor(Math.random() * (+max - +min)) + +min;

  res.status(404).sendFile(__dirname + '/public/404/' + random+ '.html');
});

// error handlers
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

var port = 3000;
app.listen(port, () => {console.log('Server is up and running on port numner ' + port);});