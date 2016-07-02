/**
 * index.js
 * https://github.com/pxai/wzw.io
 * Pello Altadill - http://pello.io
 */
var basic = require('./basic');
var post = require('./post');

module.exports = function (app) {
    basic(app);
    post(app);
}