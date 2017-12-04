
const url = require('url');

exports.UrlParser =  function (urlToParse) {
    this.url = url.parse(urlToParse);

	this.getHostname = function() {
           return this.url.hostname;
    }

	this.getPort = function() {
        if (null === this.url.port && this.url.protocol == 'http:') {
            return 80;
        } else if (null === this.url.port && this.url.protocol == 'https:') {
            return 443;
        } else {
           return this.url.port;
        }
    }

	this.getPathname = function() {
           return this.url.pathname;
    }

	this.toString = function () {
		return 'Name: UrlParser';
	}
}
