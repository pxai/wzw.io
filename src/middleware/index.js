/**
 * index.js
 * https://github.com/pxai/wzw.io
 * Pello Altadill - http://pello.io
 */
var time = require('./time');

module.exports = function (app) {
    app.use(time);
}