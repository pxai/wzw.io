/**
 * app.js
 * https://github.com/pxai/wzw.io
 * Pello Altadill - http://pello.io
 */
var express = require('express');
var bodyParser = require('body-parser')

var app = express();

var routes = require('./routes');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// We set routes
routes(app);

// We set static content
app.use(express.static('public/dist'));

// And there we go, listening on port 3000
app.listen(8888, function () {
    console.log('now listening on http://localhost:' + 8888);
});
