/**
 * routes/post.js
 * https://github.com/pxai/wzw.io
 * Pello Altadill - http://pello.io
 */
var http = require('http');

module.exports = function (app) {

    /**
     * request
     */
    app.post('/m', function(req, res) {
        var url = req.body.u;
        var response_msg = '';

        response_msg += 'TODO, make something about this ' + url;
        options = {  host: 'www.google.es',
                     path: '/'};

        var http_req = http.request(options, function(remote_response) {
            console.log('STATUS: ' + remote_response.statusCode);
            console.log('HEADERS: ' + JSON.stringify(remote_response.headers));
            var data = '';
            remote_response.setEncoding('binary');
           
            remote_response.on('data', function (chunk) {
                data += chunk;
                console.log('BODY: ' + chunk);
            });
            
            remote_response.on('end', function (err) {
                console.log('ENDED: ');
                //if (err) throw err;
                response_msg += 'Yeah, let\'s build it: ' + data;
                res.send(response_msg);
            });
        });
        http_req.end();
    });
}
