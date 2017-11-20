
var http = require('http');
var colors = require('colors');
const urlParser = require('../parser/urlParser');
const htmlOptimizer = require('../optimizer/htmlOptimizer');

module.exports = function (app) {

    app.post('/m', function(req, res) {
        const url = new urlParser.UrlParser(req.body.u);
        const optimizer = new htmlOptimizer.HtmlOptimizer();
        var response_msg = '';

        options = {  host: url.getHostname(),
                     path: url.getPathname()};

        var http_req = http.request(options, function(remote_response) {
            console.log('STATUS: ' + remote_response.statusCode);
            console.log('HEADERS: ' + JSON.stringify(remote_response.headers));
            var data = '';
            remote_response.setEncoding('binary');

            remote_response.on('data', function (chunk) {
                data += chunk;
                console.log('BODY: ' + chunk.length);
            });

            remote_response.on('end', function (err) {
                console.log('ENDED: ', data.length);
                if (err) throw err;
                response_msg += data;
                optimizer.optimize(response_msg).then(minifiedHtml => {
                  console.log("Sizes: ", response_msg.length, minifiedHtml.length);
                  res.send(minifiedHtml);
                });
            });
        });
        http_req.end();
    });
}
