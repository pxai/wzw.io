/**
 * routes/post.js
 * https://github.com/pxai/wzw.io
 * Pello Altadill - http://pello.io
 */
var http = require('http');
const urlParser = require('../parser/urlParser');


module.exports = function (app) {

    /**
     * request
     */
    app.post('/m', function(req, res) {
        const url = new urlParser.UrlParser(req.body.u);
        var response_msg = '';

        //response_msg += 'TODO, make something about this ' + url.getHostname();
        options = {  host: url.getHostname(),
                     path: url.getPathname()};

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
                response_msg += data;
                res.send(response_msg);
            });
        });
        http_req.end();
    });
}
