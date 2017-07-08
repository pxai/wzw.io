const http = require('http');
const urlParser = require('../parser/urlParser');

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
            
                http.get(options,function(res) {
                            var data = '';
                            this.statusCode = res.statusCode;
                            this.statusMessage = res.statusMessage;
                            res.on('data', function (e){
                                data += e;
                            }).on('end', function () {
                                resolve(data);
                            });
                }).on('error', function(e) {
                    reject(e);
                });
            });
        }

   

	this.toString = function () {
		return 'Name: HttpRequest';
	}
}
