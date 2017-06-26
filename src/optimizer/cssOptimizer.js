const cheerio = require('cheerio');

exports.CssOptimizer =  function (url) {

	this.optimize = function(css) {
            return new Promise(function(resolve, reject) {
				if (css==='') {
					resolve('');
				} else {
               		resolve(css);
				}
            });
        }

	this.toString = function () {
		return 'Name: CssOptimizer';
	}
}
