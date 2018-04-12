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
							let minifiedHTML = '';
							try {
								console.log(html.length);
								minifiedHTML= minify(html, options);
							} catch (e) {
								console.log(e)
							}
							let minifiedHTMLLength = minifiedHTML.length;
							let report = `<div style='background-color: orange;position:absolute;top:0;right:0;'><b>HTML</b>: ${minifiedHTML.length} reduced to ${minifiedHTMLLength} ${Math.round((minifiedHTMLLength/html.length)*100) + '%'}</div>`;
							console.log('Reduced to: ', minifiedHTMLLength, Math.round((minifiedHTMLLength/html.length)*100) + '%');
		          			resolve(minifiedHTML+report);
						}
      });
		}

	this.toString = function () {
		return 'Name: HtmlOptimizer';
	}
}
