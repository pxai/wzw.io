const jsmin = require('jsmin').jsmin;

exports.JsOptimizer =  function (url) {

	this.optimize = function(js) {
            return new Promise(function(resolve, reject) {
				if (js==='') {
					resolve('');
				} else {
               		return resolve(jsmin(js));
				}
            });
        }

	this.toString = function () {
		return 'Name: JsOptimizer';
	}
}
