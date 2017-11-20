const cheerio = require('cheerio');
const rootUrl = 'http://wzw.io/p/';

exports.HtmlParser =  function (url) {

	this.changeRefs = function(html) {
            return new Promise(function(resolve, reject) {
				if (html=='') {
					resolve('');
				} else {
               		resolve(rootUrl + html);
				}
            });
        }
	this.toString = function () {
		return 'Name: HtmlParser';
	}
}
