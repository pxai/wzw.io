const htmlmin = require('htmlmin');

exports.HtmlOptimizer =  function (url) {

	this.optimize = function(html) {
      return new Promise(function(resolve, reject) {
					console.log('Trying to opmitize: ', html.length);
						if (html==='') {
							resolve('');
						} else {
		          resolve(htmlmin(html));
						}
      });
		}

	this.toString = function () {
		return 'Name: HtmlOptimizer';
	}
}
