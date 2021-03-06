var colors = require('colors');
const urlParser = require('../parser/urlParser');
const htmlOptimizer = require('../optimizer/htmlOptimizer');
const htmlParser = require('../parser/htmlParser');
const httpRequest = require('../http/httpRequest');
const resource = require('../data/resource');

module.exports = function (app, repository) {

    app.post('/m', function(req, res) {
        const url = new urlParser.UrlParser(req.body.u);
        const parser = new htmlParser.HtmlParser();
        const optimizer = new htmlOptimizer.HtmlOptimizer();
        const http = new httpRequest.HttpRequest();

        var response_msg = '';

        options = {  host: url.getHostname(),
                     path: url.getPathname()};

        http.get(url.getUrl())
          .then(html => optimizer.optimize(html))
          .then(optimizedHtml => res.send(optimizedHtml+"<div>Stats: </div>"))
          .catch(e=> console.error('Screw up', e));

    });

    app.get('/g/:id/:url', function(req, res) {
        const url = new urlParser.UrlParser(req.params.url);
        const parser = new htmlParser.HtmlParser();
        const optimizer = new htmlOptimizer.HtmlOptimizer();

        var response_msg = '';

        options = {  host: url.getHostname(),
                     path: url.getPathname()};

        var http_req = http.request(options, function(remote_response) {
            console.log('STATUS: ' + remote_response.statusCode);
            console.log('HEADERS: ', remote_response.headers);

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
                parser.changeAnchors(response_msg).then((changed_response_msg) => {
                  optimizer.optimize(changed_response_msg).then(minifiedHtml => {
                    console.log("Sizes: ", response_msg.length, minifiedHtml.length);
                    res.send(minifiedHtml);
                  });
              });
            });
        });
        http_req.end();
    });
}
