const cheerio = require('cheerio');
const root = 'http://wzw.io/p/';
exports.HtmlParser =  function (url) {
	// Properties ///////////////

	this.changeRefs = function(html) {
            return new Promise(function(resolve, reject) {
               resolve(html);
            });
        }

   

	/**
	* toString, returns all properties
	*/
	this.toString = function () {
		return 'Name: HtmlParser';
	}
}