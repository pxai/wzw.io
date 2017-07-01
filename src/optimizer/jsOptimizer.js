const htmlmin = require('htmlmin');

exports.JsOptimizer =  function (url) {

	this.optimize = function(html) {
            return new Promise(function(resolve, reject) {
				if (html==='') {
					resolve('');
				} else {
               		return resolve(htmlmin(html));
				}
            });
        }

	this.toString = function () {
		return 'Name: JsOptimizer';
	}
}
