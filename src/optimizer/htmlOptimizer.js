//const htmlmin = require('htmlmin');
const minify = require('html-minifier').minify;
const options = {
	minifyCSS: true,
	minifyJS: true,
	collapseWhitespace:true,
	removeOptionalTags: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	removeComments: true,
	removeRedundantAttributes: true,
	collapseBooleanAttributes: true,
	removeAttributeQuotes: true,
	removeOptionalTags: true,
	removeEmptyAttributes: true,
	trimCustomFragments: true
};

exports.HtmlOptimizer =  function (url) {

	this.optimize = function(html) {
      return new Promise(function(resolve, reject) {
					console.log('Trying to opmitize: ', html.length);
						if (html==='') {
							resolve('');
						} else {
		          resolve(minify(html, options));
						}
      });
		}

	this.toString = function () {
		return 'Name: HtmlOptimizer';
	}
}
