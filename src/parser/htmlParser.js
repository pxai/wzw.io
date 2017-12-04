const cheerio = require('cheerio');
const rootUrl = 'http://wzw.io/p/';

exports.HtmlParser =  function () {

	this.changeRefs = function(html) {

    return new Promise(function(resolve, reject) {
							if (html=='') {
								resolve('');
							} else {
			          resolve(this.changeAnchors(html));
							}
        });
  }

	this.changeAnchors = function(html) {
		return new Promise(function(resolve, reject) {

				$ = cheerio.load(html);
				$("a").each(function() {
				        var old_src=$(this).attr("href");
				        $(this).attr("href", rootUrl + encodeURIComponent(old_src));
				});
				console.log('here',$.html());
				resolve($.html());
			});
	}

	this.changeImages = function(html) {
		return new Promise(function(resolve, reject) {
				$ = cheerio.load(html);
				$("img").each(function() {
								$(this).attr("src", rootUrl + encodeURIComponent($(this).attr("src")));
				});
				resolve($.html());
			});
	}

	this.changeCss = function(html) {
		return new Promise(function(resolve, reject) {
					$ = cheerio.load(html);
				$("link").each(function() {
								$(this).attr("href", rootUrl + encodeURIComponent($(this).attr("href")));
				});
				resolve($.html());
			});
	}

	this.changeJs = function(html) {
		return new Promise(function(resolve, reject) {

				$ = cheerio.load(html);
				$("script").each(function() {
								$(this).attr("src", rootUrl + encodeURIComponent($(this).attr("src")));
				});
				resolve($.html());
			});
	}

	this.toString = function () {
		return 'Name: HtmlParser';
	}
}
