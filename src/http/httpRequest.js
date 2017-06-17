const http = require('http');

exports.HttpRequest =  function (url) {

	this.url = url;
	this.requestDate = new Date();
    this.statusCode = null;
    this.statusMessage = null;

    this.req;

	this.get = function(url) {
            return new Promise(function(resolve, reject) {
                const options = {
                    port: 80,
                    hostname: url,
                    method: 'GET',
                    path: '/'
                };
                http.get(options,function(res) {
                            var content = [];
                            this.statusCode = res.statusCode;
                            this.statusMessage = res.statusMessage;
                            res.on('data', function (e){
                                content.push(e);
                            }).on('end', function () {
                                resolve(content);
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
