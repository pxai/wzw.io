
const basic = require('./basic');
const post = require('./post');
const report = require('./report');

module.exports = function (app) {
    basic(app);
    post(app);
    report(app);
}