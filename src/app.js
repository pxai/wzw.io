/**
 * app.js
 * https://github.com/pxai/wzw.io
 * Pello Altadill - http://pello.io
 */
var express = require('express');
var app = express();

var routes = require('./routes');


// We set routes
routes(app);

// We set static content
app.use(express.static('public/dist'));

// And there we go, listening on port 3000
app.listen(8888, function () {
    console.log('now listening on http://localhost:' + 8888);
});
