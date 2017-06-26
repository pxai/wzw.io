const cheerio = require('cheerio');

exports.HtmlOptimizer =  function (url) {

	this.optimize = function(html) {
            return new Promise(function(resolve, reject) {
				if (html==='') {
					resolve('');
				} else {
               		resolve(html);
				}
            });
        }

	this.toString = function () {
		return 'Name: HtmlOptimizer';
	}
}
