const http = require('http');
const https = require('https');
const urlParser = require('../parser/urlParser');
let htmlmin = require('htmlmin');

exports.HttpRequest =  function () {

	this.requestDate = new Date();
    this.statusCode = null;
    this.statusMessage = null;

    this.req;

	this.get = function(url) {
            return new Promise(function(resolve, reject) {
                var urlP = new urlParser.UrlParser(url);
                const options = {
                    port: urlP.getPort(),
                    hostname: urlP.getHostname(),
                    method: 'GET',
                    path: urlP.getPathname()
                };

								if (urlP.getPort() === 80) {
																		console.log('HTTP request!')
									let req = http.get(options,function(res) {
															let data = [];
															this.statusCode = res.statusCode;
															this.statusMessage = res.statusMessage;
															res.on('data', function (e){
																	data.push(e);
															}).on('end', function () {
																 resolve(Buffer.concat(data).toString());
															});
									}).on('error', function(e) {
											reject(e);
									});

								req.end();
								} else {
									console.log('HTTPS request!')
									let req = https.get(options,function(res) {
															let data = [];
															this.statusCode = res.statusCode;
															this.statusMessage = res.statusMessage;
															res.on('data', function (e){
																	data.push(e);
															}).on('end', function () {
																 resolve(Buffer.concat(data).toString());
															});
									}).on('error', function(e) {
										console.error('\nError:', e);
											reject(e);
									});

								req.end();
								}

            });
        }



	this.toString = function () {
		return 'Name: HttpRequest';
	}
}
