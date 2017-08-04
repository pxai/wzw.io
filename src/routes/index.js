
var basic = require('./basic');
var post = require('./post');

module.exports = function (app) {
    basic(app);
    post(app);
}