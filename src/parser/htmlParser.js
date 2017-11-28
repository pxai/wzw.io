const cheerio = require('cheerio');
const rootUrl = 'http://wzw.io/p/';

exports.HtmlParser =  function (url) {

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
			let html = '<b><a href="http://www.as.com">as</a> Epa ye<a href="http://www.marca.com">as</a> </b>';
				$ = cheerio.load(html);
				$("a").each(function() {
				        var old_src=$(this).attr("href");
				        $(this).attr("href", rootUrl + encodeURIComponent(old_src));
				});
				resolve($.html());
			});
	}

	this.changeImages = function(html) {
		return new Promise(function(resolve, reject) {
			let html = '<b><img src="http://www.as.com/we.jpg" /> Epa ye<img src="http://www.marca.com/we.png" /> </b>';
				$ = cheerio.load(html);
				$("img").each(function() {
								$(this).attr("src", rootUrl + encodeURIComponent($(this).attr("src")));
				});
				resolve($.html());
			});
	}

	this.changeCss = function(html) {
		return new Promise(function(resolve, reject) {
			let html = '<b><link href="http://www.as.com/we.jpg" /> Epa ye<img src="http://www.marca.com/we.png" /> </b>';
				$ = cheerio.load(html);
				$("link").each(function() {
								$(this).attr("href", rootUrl + encodeURIComponent($(this).attr("href")));
				});
				resolve($.html());
			});
	}

	this.changeJs = function(html) {
		return new Promise(function(resolve, reject) {
			let html = '<b><script src="http://www.as.com/we.js" /> Epa ye<img src="http://www.marca.com/we.png" /> </b>';
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
